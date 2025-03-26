🚀 AI-Powered Task Manager

A smart to-do list that prioritizes tasks and generates AI-powered insights using Google Gemini AI. 

📷 Screenshots

Include the following screenshots in a screenshots/ folder:

Home Screen – Task list with AI insights

Adding a Task – Show the form and priority selection

AI Insights Below Tasks – Display AI-generated insights appearing
 

🌟 Features

✔ Task Prioritization – Sort tasks based on priority (High, Medium, Low)

✔ AI-Generated Insights – Google Gemini AI provides suggestions for tasks

✔ Local Storage Persistence – Tasks are saved even after page refresh

✔ User Authentication – Protect tasks behind login/logout functionality

✔ Beautiful UI with Tailwind CSS


Installation & Setup


1️⃣ Clone the Repository

     git clone https://github.com/your-username/ReduxTask-main.git  
     cd ReduxTask-main
2️⃣ Install Dependencies
        
    npm install
3️⃣ Set Up Environment Variables  
   Create a .env file in the root directory and add:
    
    REACT_APP_GEMINI_API_KEY=your-gemini-api-key-here

   For Vite users, use:
      
    VITE_GEMINI_API_KEY=your-gemini-api-key-here
4️⃣ Start the Application 

    npm run dev  # For Vite

🏗️ Folder Structure

        ReduxTask-main/
            ├── src/
            │   ├── app/
            │   │   ├── store.js
            │   ├── components/
            │   │   ├── AddTodo.jsx
            │   │   ├── Todos.jsx
            │   ├── feature/
            │   │   ├── ai/aiSlice.js
            │   │   ├── auth/authSlice.js
            │   │   ├── todo/todoSlice.js
            │   ├── App.jsx
            │   ├── main.jsx
            │   ├── index.css
            │   ├── App.css
            ├── package.json
            ├── vite.config.js
            ├── tailwind.config.js
            ├── .gitignore
            ├── .env  (Environment variables for API keys)
            └── README.md


 🚀 API Integration
We use Google Gemini AI for task insights.
         
Base URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
         
Payload Example:
            {
                  "contents": [{ "parts": [{ "text": "Give insights for writing an essay" }] }]
            }

