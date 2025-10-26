const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) return res.status(400).send("Code is required");

    const response = await aiService(code);
    res.send(response);

  } catch (error) {
    console.error("Error in getReview:", error.message);

    // Handle Google API quota exceeded (429) separately
    if (error.message.includes("429") || error.message.includes("Too Many Requests")) {
      return res.status(429).send({
        message: "AI API quota exceeded. Please try again in a few minutes."
      });
    }

    // Generic 500
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message
    });
  }
};
