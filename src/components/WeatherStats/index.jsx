import React from 'react';
import WeatherCard from '../WeatherCard';
import styled from 'styled-components';
import WindStatus from '../WindStatus';
import Humidity from '../Humidity';
import Highlight from '../Highlight';
import Footer from '../Footer';

const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    background-color: #100e1d;
    padding: 0 8rem;

    @media (max-width: 1440px) {
        padding: 40px 80px 0px 80px;
      }
      @media (max-width: 1024px) {
        height: max-content;
      }
      @media (max-width: 768px) {
        padding: 40px 9px;
      }
`;

const TempUnit = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 0;
  border-radius: 50%;
  font-family: Raleway;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 6px;
  cursor: pointer;
  background: #585676;
  color: #e7e7eb;
  transition: background 500ms ease;
`;

const UpcomingWeather = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
      }
`;

const WeatherHighLights = styled.div`
display: flex;
justify-content: space-between;

flex-wrap: wrap;

@media (max-width: 1024px) {
    justify-content: center;
  }
`;

function WeatherStats({ weather, setUnits }) {

    return (
        <StatsWrapper>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: '1rem' }}>
                <TempUnit onClick={e => setUnits(true)}>&#176;C</TempUnit>
                <TempUnit onClick={e => setUnits(false)}>&#176;F</TempUnit>
            </div>
            <UpcomingWeather>
                {weather.consolidated_weather.map((weatherState, i) =>
                i ? <WeatherCard key={i} weatherState={weatherState} /> : null
                )}
            </UpcomingWeather>
            <div style={{color: 'white', marginTop: '1rem'}}>
                <h1>Today's WeatherHighlights</h1>
            </div>
            <WeatherHighLights>
                <WindStatus 
                    value={weather.consolidated_weather[0].wind_speed.toPrecision(2)}
                    direction={weather.consolidated_weather[0].wind_direction_compass}
                    degree={weather.consolidated_weather[0].wind_direction}
                />
                <Humidity humidity={weather.consolidated_weather[0].humidity}/>
            </WeatherHighLights>
            <WeatherHighLights>
                <Highlight 
                    title="Visibility"
                    value={weather.consolidated_weather[0].visibility.toPrecision(3)}
                    unit="miles"
                />
                <Highlight 
                    title="Air pressure"
                    value={weather.consolidated_weather[0].air_pressure}
                    unit="mb"
                />
            </WeatherHighLights>
            <Footer />
        </StatsWrapper>
    );
}

export default WeatherStats;