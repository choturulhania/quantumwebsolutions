from flask import Flask, render_template_string, request
import re

app = Flask(__name__)

# --- Simple Interpreter Logic ---
variables = {}
functions = {}

def handle_let(stmt):
    parts = stmt.split("=", 1)
    left = parts[0].strip()
    right = parts[1].strip()
    name = left.split()[1].split(":")[0].strip()
    variables[name] = eval(right, {}, variables)

def handle_fun(lines):
    header = lines[0]
    body = lines[1:]
    name = header.split()[1].split("(")[0]
    arglist = header[header.find("(")+1:header.find(")")]
    args = [a.strip().split(":")[0] for a in arglist.split(",") if a.strip()]
    def fn(*passed):
        local_vars = dict(zip(args, passed))
        code = "\n".join(body)
        return eval(code.split("return")[-1].strip(), {}, {**variables, **local_vars})
    functions[name] = fn

def handle_when(stmt, body):
    val = eval(stmt.split()[1], {}, variables)
    for line in body:
        if "->" in line:
            case, action = line.split("->")
            case = case.strip()
            action = action.strip()
            if case == "else" or str(val) == case:
                if action.startswith("print"):
                    print(eval(action[6:-1], {}, variables))
                return

def render_html(html):
    def replacer(match):
        expr = match.group(1)
        return str(eval(expr, {**variables, **functions}))
    return re.sub(r"{([^}]+)}", replacer, html)

def run(program):
    lines = [l for l in program.split("\n") if l.strip()]
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("let"):
            handle_let(line)
        elif line.startswith("fun"):
            j = i+1
            while j < len(lines) and lines[j].startswith("    "):
                j += 1
            handle_fun(lines[i:j])
            i = j-1
        elif line.startswith("when"):
            j = i+1
            while j < len(lines) and "->" in lines[j]:
                j += 1
            handle_when(line, lines[i+1:j])
            i = j-1
        elif line.startswith("<"):
            html = "\n".join(lines[i:])
            return render_html(html)
        i += 1
    return ""

# --- Flask Routes ---
learning_page = """
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>PykotML Learning ✧</title>
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;
            background: linear-gradient(120deg, #141e30, #243b55);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            padding: 20px;
        }

        header h1 {
            font-size: 3em;
            background: linear-gradient(270deg, #ff4e50, #f9d423, #1fa2ff, #12d8fa, #a6ffcb);
            background-size: 800% 800%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 12s ease infinite;
            text-align: center;
            margin-bottom: 30px;
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }

        .card {
            backdrop-filter: blur(12px);
            background: rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            padding: 30px;
            max-width: 700px;
            width: 100%;
            animation: fadeIn 0.6s ease;
            text-align: center;
        }

        .card h2 {
            font-size: 1.8em;
            margin-bottom: 15px;
            background: linear-gradient(270deg, #ff7e5f, #feb47b);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 8s ease infinite;
        }

        .card ul {
            text-align: left;
            line-height: 1.8;
            font-size: 1.1em;
            color: #f0f0f0;
            margin-bottom: 20px;
        }

        .btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 10px;
            font-size: 1em;
            font-weight: 500;
            border-radius: 25px;
            border: none;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s;
            color: white;
        }

        .btn-blue { background: linear-gradient(135deg, #43e97b, #38f9d7); }
        .btn-blue:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.3); }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>
<header>
    <h1>PykotML Learning ✧</h1>
</header>
<main>
    <div class=\"card\">
        <h2>Syntax Basics</h2>
        <ul>
            <li><b>Variables</b>: <code>let name: String = \"Ayaan\"</code></li>
            <li><b>Functions</b>:
                <pre>fun greet(person: String) -> String:
    return \"Hello, \" + person</pre>
            </li>
            <li><b>When blocks</b>:
                <pre>when 7:
    3 -> print(\"Three\")
    7 -> print(\"Seven\")
    else -> print(\"Other\")</pre>
            </li>
            <li><b>HTML Rendering</b>:
                <pre><h1>{greet(name)}</h1></pre>
            </li>
        </ul>
        <div>
            <a href=\"/console\" class=\"btn btn-blue\">➡ Go to Console</a>
        </div>
    </div>
</main>
</body>
</html>
"""

console_page = """
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>PykotML Console</title>
    <style>
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;
            background: linear-gradient(120deg, #141e30, #243b55);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            padding: 20px;
        }
        header h1 {
            font-size: 2.5em;
            background: linear-gradient(270deg, #ff4e50, #f9d423, #1fa2ff, #12d8fa, #a6ffcb);
            background-size: 800% 800%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 12s ease infinite;
            margin-bottom: 20px;
        }
        textarea {
            width: 100%;
            max-width: 800px;
            height: 200px;
            border-radius: 12px;
            padding: 15px;
            border: none;
            font-size: 1em;
            margin-bottom: 10px;
        }
        button {
            padding: 12px 24px;
            border-radius: 25px;
            border: none;
            background: linear-gradient(135deg, #43e97b, #38f9d7);
            cursor: pointer;
            font-size: 1em;
            font-weight: 500;
            transition: all 0.3s;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .output {
            margin-top: 20px;
            background: rgba(255, 255, 255, 0.08);
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            white-space: pre-wrap;
            max-width: 800px;
            width: 100%;
        }
        @keyframes gradientShift {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }
    </style>
</head>
<body>
<header>
    <h1>PykotML Console</h1>
</header>
<main>
    <form method=\"post\" style=\"width:100%; max-width:800px;\">
        <textarea name=\"code\" placeholder=\"Write your PykotML code here...\"></textarea><br>
        <button type=\"submit\">Run</button>
    </form>
    {% if output %}
    <div class=\"output\">
        <h3>Output:</h3>
        {{output|safe}}
    </div>
    {% endif %}
</main>
</body>
</html>
"""

@app.route("/")
def learn():
    return learning_page

@app.route("/console", methods=["GET","POST"])
def console():
    output = None
    if request.method == "POST":
        code = request.form["code"]
        try:
            output = run(code)
        except Exception as e:
            output = f"Error: {e}"
    return render_template_string(console_page, output=output)

if __name__ == "__main__":
    app.run(debug=True)
