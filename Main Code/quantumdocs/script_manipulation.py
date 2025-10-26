import time
from colorama import init, Fore, Style

name1 = "Ayaan"
name2 = "Tom"
print("Hello, " + name2 + "; My name is " + name1 + "." )
print("I believe " + "we will be " + "super " * 5 + "good friends" + ".")
print("I am " + name1 + ".")
print("You are " + name2 + ".")
print("Bye! " + "Bye!")

init(autoreset=True)

def greet(xyz):
    message = f"Hello, {xyz}!"
    neon_colors = [Fore.CYAN, Fore.MAGENTA, Fore.YELLOW, Fore.GREEN]

    for i, char in enumerate(message):
        color = neon_colors[i % len(neon_colors)]
        print(color + char, end='', flush=True)
        time.sleep(0.1)  # Typewriter effect
    print(Style.RESET_ALL)

greet("Ayaan")

