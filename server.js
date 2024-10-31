const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cars = {
    'toyota': {
        'carMake': 'Toyota',
        'carModel': 'Camry',
        'carYear': '2024',
        'carPrice': '$27,000'
    },
    'audi':{
        'carMake': 'Audi',
        'carModel': 'A3',
        'carYear': '2022',
        'carPrice': '$23,000'
    },
    'bmw':{
        'carMake': 'BMW',
        'carModel': '7-Series',
        'carYear': '2021',
        'carPrice': '$32,000'
    },
    'unknown':{
        'carMake': 'unknown',
        'carModel': 'unknown',
        'carYear': 'unknown',
        'carPrice': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:make',(request,response)=>{
    const carType = request.params.make.toLowerCase()

    if( cars[carType] ){
        response.json(cars[carType])
    }else{
        response.json(cars['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})