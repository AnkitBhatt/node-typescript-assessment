import express from 'express';
import { sum } from './sumController';

const app = express();

app.use(express.json())

//view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/sum', (req, res) => {
  //will handle sum function here
  const { stringInput } = req.body;

  let output = 0;
  if (stringInput.length === 0) {
    output = sum();
  }
  else if (stringInput.length === 1) {
    output = sum(stringInput)
  }
  else {
    //only comma separated
    //const arr = stringInput.split(",")

    //comma and new line both are in string
    const newLineArrays = stringInput.split('\\n');
    const arr = []
    for (const n of newLineArrays) {
      if (n.includes(",")) {
        const array = n.split(',');
        arr.push(...array);
      }
      else {
        arr.push(n)
      }
    }
    output = sum(...arr)
  }

  res.status(200).send({ result: output })
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT)
})