const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

app.use(cors());
app.use(bodyParser.json());

// Calculate endpoint
app.post('/api/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;

    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operator';
    }

    res.json({ result });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;