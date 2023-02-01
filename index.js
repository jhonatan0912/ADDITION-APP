import express from 'express';
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
  res.json({
    "endpoints": "/sum/{number1}/{number2}"
  })
})

app.get('/sum/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const result = parseInt(n1) + parseInt(n2)
  res.json({
    "Resultado": result
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});