// api/salary.js
export default function handler(req, res) {
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
  
    // Respond with the salary data in JSON format
    res.status(200).json(salaryData);
  }