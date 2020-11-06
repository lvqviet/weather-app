import React, { useEffect, useState } from 'react';
import WeatherStats from '../WeatherStats';
import WeatherToday from '../WeatherToday';
import styled from 'styled-components';

export const WeatherContext = React.createContext();

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 4fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

function Main() {
  const [celsius, setUnits] = useState(true);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [locations, setLocations] = useState([]);

  const getWeather = (locId) => {
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locId}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(console.error);
  };

  const getLocId = (loc) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${loc}`,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLocations(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
      
    //   console.log("Latitude is :", position.coords.latitude.toPrecision(5));
    //   console.log("Longitude is :", position.coords.longitude.toPrecision(5));
    //   getWeather(`${position.coords.latitude.toPrecision(5)},${position.coords.longitude.toPrecision(5)}`);
    // });
    getWeather("1252431");
  }, []);

  const convertToFahrenheit = (celsius) => {
    return ((parseFloat(celsius) * 9) / 5 + 32).toPrecision(3);
  };

    return (
    loading ? (
        <h3>loading</h3>
      ) : (
        <MainWrapper>
          <WeatherContext.Provider
            value={{
              celsius,
              locations,
              getLocId,
              getWeather,
              convertToFahrenheit,
            }}
          >
            <WeatherToday weather={weather} />
            <WeatherStats weather={weather} setUnits={setUnits} />
          </WeatherContext.Provider>
          
        </MainWrapper>
      )
  
    );
}

export default Main;