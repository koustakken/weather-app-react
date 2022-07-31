import React, {useState} from "react";
import axios from "axios";

function App() {

  const [location, setLocation] = useState('Moscow')
  const [data, setData] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e4b497eff068841183786921cf2e0901&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter' || event.key === "click") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation(location)
    }
  }

  return (
    <div className="App">
      <div className="search-container">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter a city name'
          type="text" />
          <button className="search-btns" onClick={searchLocation}>search</button>
      </div>
    </div>
  );
}

export default App;
