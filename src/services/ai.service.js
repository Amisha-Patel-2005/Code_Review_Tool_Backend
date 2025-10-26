const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GIMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are a senior code reviewer with 7+ years of experience.
Focus on code quality, best practices, performance, readability, security, and maintainability.
Provide clear, constructive feedback with examples when possible.
`
});

async function generateContent(prompt) {
  try {
    // Real API call
    const result = await model.generateContent(prompt);
    return result.response.text();

  } catch (err) {
    console.error("Error from Gemini API:", err.message);

    // Fallback mock response (development)
    return `⚠️ Could not fetch AI review due to quota. Here’s a mock review for code: "${prompt}"`;
  }
}

module.exports = generateContent;
