const ACCESS_KEY = '8312cf4e11dea76afc0bce64a28744e8'

const _retrieveWeatherForecastMockedData = () => fetch('/data/weather-api-mocked-data.json')
.then(res => res.json())
.catch(err => console.log("Oh no", err))


const _retrieveWeatherForecastApiData = coordinates => fetch(`https://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates.lat},${coordinates.lng}`)
    .then(res => res.json())
    .catch(err => console.log("Oh no", err))


const retrieveWeatherForecastData = async (coordinates, isMocked) => {
    if (isMocked) {
        return await _retrieveWeatherForecastMockedData()
    }
    return await _retrieveWeatherForecastApiData(coordinates)
}