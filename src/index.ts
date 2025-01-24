import express from 'express';
import { sum } from "./sumController.js";

const app = express();

//view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/sum', sum);

app.listen(process.env.PORT, ()=>{
  console.log("Server is running on port ", process.env.PORT)
})