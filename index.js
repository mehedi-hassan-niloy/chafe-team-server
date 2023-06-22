const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const allData = require('./allData.json');

const foodData = require('./foodData.json');

const workData = require ('./workData.json')

app.use(cors())


app.get('/', (req, res)=>{
  res.send('Server API is running')
});

app.get('/allData', (req, res) =>{
    res.send(allData)
});

app.get('/workData', (req, res) =>{
    res.send(workData)
})

app.get('/allData/:id', (req, res) =>{
    const id =parseInt( req.params.id);
    console.log(id)
    const selectedData = allData.find(n =>parseInt( n._id) === id)
    res.send(selectedData)
}),

app.get('/foodData', (req, res) =>{
    res.send(foodData)
})


app.listen(port, ()=>{
    console.log(`Server site API is running on port : ${port}`)
})