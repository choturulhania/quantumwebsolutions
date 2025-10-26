import requests
import json
import time
import os

# --- Configuration ---
# IMPORTANT: Replace "YOUR_API_KEY" with your actual Gemini API key.
# It is recommended to set this as an environment variable for security.
# Example: export GEMINI_API_KEY="your_api_key_here"
API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyCUFcIQQUzgJ6hJlpOspZzTHncbGy2XKvc")

# The URL for the Gemini API. We are using the generateContent endpoint for conversational text.
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key={API_KEY}"

# --- Helper Functions ---

def call_gemini_api(prompt, history=[]):
    """
    Makes a request to the Gemini API to generate a response.
    Includes a simple retry mechanism with exponential backoff.

    Args:
        prompt (str): The user's message to send to the model.
        history (list): A list of previous messages to maintain context.

    Returns:
        str: The generated response text, or an error message.
    """
    # The 'contents' array holds the conversation history.
    # We add the new user prompt at the end.
    conversation_parts = history + [{
        "role": "user",
        "parts": [{"text": prompt}]
    }]

    payload = {
        "contents": conversation_parts
    }

    headers = {
        'Content-Type': 'application/json'
    }

    # Implement exponential backoff for retries
    retry_count = 0
    max_retries = 5
    while retry_count < max_retries:
        try:
            response = requests.post(API_URL, headers=headers, data=json.dumps(payload))
            response.raise_for_status()  # Raise an exception for HTTP errors (4xx or 5xx)

            data = response.json()
            # Navigate the JSON response to find the generated text.
            if 'candidates' in data and len(data['candidates']) > 0:
                if 'content' in data['candidates'][0] and 'parts' in data['candidates'][0]['content']:
                    # Extract the text and return it.
                    return data['candidates'][0]['content']['parts'][0]['text']
            return "Error: No valid response from API."

        except requests.exceptions.RequestException as e:
            # Handle request errors (network issues, API errors, etc.)
            print(f"Request failed: {e}")
            if retry_count < max_retries - 1:
                wait_time = 2 ** retry_count
                print(f"Retrying in {wait_time} seconds...")
                time.sleep(wait_time)
                retry_count += 1
            else:
                return f"Error: Failed to connect to API after {max_retries} retries."

def main():
    """
    Main function to run the chatbot loop.
    """
    # Conversation history to maintain context
    chat_history = []

    print("AI Chatbot (type 'exit' to quit)")

    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break

        print("Bot: Thinking...")

        # Call the API with the user's input and current chat history.
        response_text = call_gemini_api(user_input, chat_history)
        print(f"Bot: {response_text}")

        # Update the chat history for the next turn.
        chat_history.append({"role": "user", "parts": [{"text": user_input}]})
        chat_history.append({"role": "model", "parts": [{"text": response_text}]})

if __name__ == "__main__":
    main()
