import React, { useContext } from 'react';
import { WeatherContext } from '../Main';

import styled from 'styled-components';

const CardWrapper = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 18px 10px;
    text-align: center;
    color: #e7e7eb;
    width: 7rem;
    height: 9rem;
    background: #1e213a;

    h1 {
        font-size: 1rem;
        font-weight: 500;
        margin: 0;
    }

    p {
        display: inline-block;
        font-weight: 500;
        font-size: 1rem;
        
        color: #e7e7eb;
      }
`;



function WeatherCard({ weatherState }) {
    const {celsius, convertToFahrenheit } = useContext(WeatherContext);
    let date = new Date(weatherState.applicable_date).toUTCString();

    
    return (
        <CardWrapper>
            <h1>{date.slice(0, 11)}</h1>
            <div className="cnt__img" style={{ height: "4rem", margin: "10px" }}>
                <img
                src={require(`../../assets/img/${weatherState.weather_state_name
                .split(" ")
                .join("")}.png`)}
                alt="weather-state"
                height="100%"
            />
            </div>
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                padding: '0 1rem'
                }}
            >
                <>
                {celsius ? (
                    <p>{weatherState.max_temp.toPrecision(2)}&#176;C</p>
                ) : (
                    <p>
                    {convertToFahrenheit(weatherState.max_temp.toPrecision(2))}&#176;F
                    </p>
                )}
                </>
                <>
                {celsius ? (
                    <p style={{opacity: '0.5'}}>{weatherState.min_temp.toPrecision(2)}&#176;C</p>
                ) : (
                    <p style={{opacity: '0.5'}}>
                    {convertToFahrenheit(weatherState.min_temp.toPrecision(2))}&#176;F
                    </p>
                )}
                </>
            </div>
        </CardWrapper>
        
    );
}

export default WeatherCard;