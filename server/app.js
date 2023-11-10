const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: '*', 
            credentials: true,
            optionSuccessStatus:200,
}));

require('dotenv').config();

const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use(require("./routes"))

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server is running on http://localhost:${PORT}`);
})