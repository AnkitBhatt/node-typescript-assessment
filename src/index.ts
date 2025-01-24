import express from 'express';

const app = express();

//view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/sum', (req, res)=>{
  //will handle sum function here
});

app.listen(process.env.PORT, ()=>{
  console.log("Server is running on port ", process.env.PORT)
})