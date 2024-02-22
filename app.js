window.addEventListener("load", () => {
    let lon
    let lat

    //extraenos Elementos del DOM
    let temperatureValue = document.getElementById('temperature-value')
    let temperatureDescription = document.getElementById('temperature-description')

    let location = document.getElementById('location')
    let animatedIcon = document.getElementById('animated-icon')

    let windSpeed = document.getElementById('wind-speed')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
          lon = position.coords.longitude
          lat = position.coords.latitude
          const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=331f65799dc902d85364d398b77a88bc` 
          // console.log(url)
          fetch(url) //petisiones hacia la API (URL)
            .then(response => {
              return response.json()} ) //la respuesta que tenga de API retornalo en un JSON
            .then(data => {
              console.log(data.main.temp) //mostrar los datos
                let temp = Math.round(data.main.temp)//redondea el valor decimal
                temperatureValue.textContent = `${temp} ºC` //lo tiramos al HTML
                // -------------------------------------
                let desc = data.weather[0].description
                temperatureDescription.textContent = desc.toUpperCase() //mayuscula(toUpperCase)
                // -------------------------------------
                location.textContent = data.name
                // -------------------------------------
                windSpeed.textContent = data.wind.speed

              })
            .catch( error => { //capturar algun error
              console.log(error)
            })
        })
    }
})