document.querySelector('button').addEventListener('click', getCarInfo)

function getCarInfo(){
    const car = document.querySelector('input').value
    const url = `/api/${car}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#carsMake').innerText = data.carMake
        document.querySelector('#carsModel').innerText = data.carModel
        document.querySelector('#carsYear').innerText = data.carYear
        document.querySelector('#carsPrice').innerText = data.carPrice
    })
}