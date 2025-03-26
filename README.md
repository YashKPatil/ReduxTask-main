🚀 AI-Powered Task Manager

A smart to-do list that prioritizes tasks and generates AI-powered insights using Google Gemini AI. 

Live webSite Link-
https://redux-task-main.vercel.app/

📷 Screenshots

Include the following screenshots in a screenshots:

Login page-

![Screenshot 2025-03-26 194106](https://github.com/user-attachments/assets/d46a6f37-ba1a-49c8-a1a9-d8b6968fc71a)

Home Screen – Task list with AI insights
![Screenshot 2025-03-26 200342](https://github.com/user-attachments/assets/03790bb1-2908-4f7f-8a4b-44a4b7fb7798)

Adding a Task – Show the form and priority selection
![Screenshot 2025-03-26 195215](https://github.com/user-attachments/assets/b9cbca90-35e6-42b5-b5ab-0a32bd52b55b)

![Screenshot 2025-03-26 195224](https://github.com/user-attachments/assets/9436b400-2d04-4f0a-995b-3126dacbb9ed)


Update task Tab-
![Screenshot 2025-03-26 195233](https://github.com/user-attachments/assets/ca2164a8-cac7-4fb0-9efe-c2567f4675be)


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

