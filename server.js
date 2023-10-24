const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = 5000;

app.use(express.json());
app.use(cors()); // to enable cors

/*
Method : GET
Purpose: to fetch the stories from nytimes
*/
app.get('/api/top-stories', async (req, res) => {
	try {
		const response = await axios.get(
			`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NY_API_KEY}`
		);
		res.json(response.data);
	} catch (error) {
		console.error('Error fetching data from New York Times API:', error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
