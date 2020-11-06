import React, { useContext } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';
import Search from '../Search';
import { WeatherContext } from '../Main';
import img from '../../assets/img/Cloud-background.png';

const Wrapper = styled.div`
    background-color: #1e213a;
    height: 100vh;
    color: white;
    overflow: hidden;
`;

const Background = styled.div`
    width: 100%;
    height: 18rem;
    background-image: url(${img});
    opacity: 0.05;
    background-position-x: center;
    background-size: 32rem;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50%;
`;

function WeatherToday( {weather }) {
    const { celsius, convertToFahrenheit } = useContext(WeatherContext);

    return (
        <Wrapper>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', flexDirection: 'column'}}>
                <Search />
                <Background />
                <img
                    src={require(`../../assets/img/${weather.consolidated_weather[0].weather_state_name
                        .split(" ")
                        .join("")}.png`)}
                    alt="weather-state"
                    style={{position: 'absolute', top: '15%'}}
                />
                <Information>
                    <div style={{fontSize: '7rem'}}>
                        {celsius ? (
                        <>
                            {weather.consolidated_weather[0].the_temp.toPrecision(3)}
                            <span style={{fontSize: '3rem', opacity: '0.5'}}>&#176;C</span>
                        </>
                        ) : (
                        <>
                            {convertToFahrenheit(
                            weather.consolidated_weather[0].the_temp.toPrecision(3)
                            )}
                            <span style={{fontSize: '3rem', opacity: '0.5'}}>&#176;F</span>
                        </> 
                        )}
                    </div>
                    <div style={{fontSize: '2.5rem', opacity: '0.5'}}>
                        {weather.consolidated_weather[0].weather_state_name}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{fontSize:'1rem', opacity:'0.5'}}>
                        Today
                        <span style={{ display: "inline-block", width: "30px" }}></span>
                        <span style={{ display: "inline-block", width: "30px" }}>
                            &#183;
                        </span>
                        {new Date(weather.time).toUTCString().slice(0, 11)}
                        </div>
                        <div style={{margin: '15px 0',
                                    fontSize: '1.3rem',
                                    opacity: '0.5',
                                    alignItems: 'center'}}
                        >
                        <LocationOnIcon />
                            {weather.title}
                        </div>
                    </div>
                </Information>
            </div>
               
            
            
        </Wrapper>
    )}

export default WeatherToday;