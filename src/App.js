import React, {useState} from "react";
import axios from "axios";

function App() {

  const [location, setLocation] = useState('')
  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e4b497eff068841183786921cf2e0901&units=metric`

  const fetchData = () => {
    try {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const {name, weather, main} = data

  return (
    <div className="wrapper">
      <div className="container">
        <div className="search-container">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter a city name'
            type="text" />
            <button className="search-btn" onClick={fetchData}>search</button>
        </div>
        {name && 
        <div className="result">
          <h2>{name}</h2>
          <h4 className="weather">{weather ? data.weather[0].main : null}</h4>
          <h4 className="desc">{weather ? data.weather[0].description : null}</h4>
          <img src={weather ? `https://openweathermap.org/img/w/${data.weather[0].icon}.png` : null} />
          <h1>{main ? main.temp: null} &#176;</h1>
          <div className="temp-container">
            <div>
              <h4 className="title">min</h4>
              <h4 className="temp">{main ? data.main.temp_min : null}&#176;</h4>
            </div>
            <div>
            <h4 className="title">max</h4>
            <h4 className="temp">{main ? data.main.temp_max : null}&#176;</h4>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;