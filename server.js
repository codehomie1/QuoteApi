const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getQuotesByAuthor } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.get('/api/quotes/random', (req, res, next) => {
    const randomQuoteObj = getRandomElement(quotes);
    const resObj = { quote: randomQuoteObj };
    res.send(resObj);

});

// handle all quotes and with query
app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person;
    if(person) {
        // implement a function to return an array of quotes from person
        let authorQuotes = getQuotesByAuthor(quotes, person);
        let resObj = { quotes : authorQuotes };
        res.send(resObj);
    } else {
        // send all quotes back
        const resObj = { quotes: quotes };
        res.send(resObj);
    }

});

// create a new quote resource
app.post('/api/quotes', (req, res, next) => {
    const newQuoteObj = req.query;
    console.log(newQuoteObj);

    if(newQuoteObj.quote && newQuoteObj.person) {
        quotes.push(newQuoteObj);
        res.send({quote : newQuoteObj});
    } else {
        res.status(400).send();
    }
});



app.listen(PORT, () => {
    console.log("listening on port... " + PORT);
});