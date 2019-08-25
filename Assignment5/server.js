const express = require('express');
const exphbs = require('express-handlebars');

//Create the express app
const app = express();
const port = 4353;

app.use(express.json());
app.use(express.urlencoded());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Helper to create the model we pass to our handlebars view
function createModel(method, req) {
  return {
    method, //Method string passed in
    query: Object.keys(req.query).length !== 0 ? req.query : null,
    //Repeat check for the body of the request
    body: Object.keys(req.body).length !== 0 ? req.body : null
  };
}

//Get route for single page app
app.get('*', (req, res) => {
  const data = createModel('GET', req);
  res.render('index', data); //render the handlebars view with the model
});

//Post route for single page app
app.post('*', (req, res) => {
  const data = createModel('POST', req);
  res.render('index', data); //render the handlebars views with the model
})

app.listen(port, () => {
  console.log(`Lesson listening on port ${port}`);
});

