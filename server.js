require('dotenv').config();
const app = require('./src/app'); // Path to Express app

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
