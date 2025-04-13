const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const salaryData = {
  "questions": [
    {
      "question": "Has my salary been processed this month?",
      "answer": "✅ Your salary for this month has been processed on Feb 01, 2025 and should be credited to your registered bank account on Feb 05, 2025."
    },
    {
      "question": "When will I receive my salary?",
      "answer": "💰 Your salary will be credited to your bank account on Feb 05, 2025."
    },
    {
      "question": "Want to know the net pay of this month?",
      "answer": "✅ Let me check - your net pay for this month is 10,000.00 SAR."
    },
    {
      "question": "Can I download my payslip?",
      "answer": "📄 Sure! Here's your payslip: [Aug 2025 Payslip.PDF](#)"
    },
    {
      "question": "Show me the tax deductions.",
      "answer": "🧾 This month, your tax deduction is 1,200 SAR. Let me know if you'd like a breakdown."
    },
    {
      "question": "How much was my gross salary?",
      "answer": "💵 Your gross salary for this month is 11,500.00 SAR."
    },
    {
      "question": "What are the payment details for this month?",
      "answer": "📊 Payment processed on Feb 01, 2025. Net Pay: 10,000 SAR. Tax: 1,200 SAR. Bonus: 300 SAR."
    }
  ]
};

app.get('/api/db', (req, res) => {
  console.log("Server connected");
  res.json(salaryData);
});


// Start the server on the port specified in the environment variables
const port = 8000; // Get the port number from environment variables
app.listen(port, () => {
    // Log a message to the console when the server starts successfully
    console.log(`Server running on ${port}`); // Outputs the server's port and environment (e.g., development or production)
});

module.exports = app;
