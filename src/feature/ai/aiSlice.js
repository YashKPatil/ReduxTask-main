import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace with your Google Gemini AI API Key
const API_KEY = "AIzaSyDcuDymXC2j06_7ln97KBCVvDRmjtB7x8Q";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

// Async Thunk to Fetch AI Insights
export const fetchAIInsight = createAsyncThunk(
    "ai/fetchAIInsight",
    async (taskText, { rejectWithValue }) => {
        try {
            const response = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Give useful insights or recommendations for this task in one line or in few words: "${taskText}"` }] }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                throw new Error(errorData.error.message || "AI request failed");
            }

            const data = await response.json();
            console.log("API Response Data:", data);  // 👈 Log the actual response

            return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No insights available.";
        } catch (error) {
            console.error("Fetch Error:", error.message);  // 👈 Log the error if request fails
            return rejectWithValue(error.message);
        }
    }
);

const aiSlice = createSlice({
    name: "ai",
    initialState: {
        insights: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAIInsight.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAIInsight.fulfilled, (state, action) => {
                state.loading = false;
                state.insights[action.meta.arg] = action.payload;
            })
            .addCase(fetchAIInsight.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default aiSlice.reducer;
