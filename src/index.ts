import express from 'express';
import { sum } from './sumController';

const app = express();

app.use(express.json())

//view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/sum', (req, res)=>{
  //will handle sum function here
  const {stringInput} = req.body;
  
  let output = 0;
  if(stringInput.length === 0){
    output = sum();
  }
  else{
    output = sum(Number(stringInput))
  }
  
  res.status(200).send({result:output})
});

app.listen(process.env.PORT, ()=>{
  console.log("Server is running on port ", process.env.PORT)
})