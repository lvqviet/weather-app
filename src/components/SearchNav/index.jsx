import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../Main';
import Close from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import Location from '../Location';

const Wrapper = styled.div`
    background-color: #1E213A;
    height: 100vh;
    color: #E7E7EB;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const SearchBar = styled.input`
    width: 60%;
    height: 2rem;
    color: #b6b9ca;
    background-color: transparent;
    outline: 0;
    border: 0;
    font-size: 1.3rem;
`;

const SearchBtn = styled.button`
    background-color: #3C47E9;
    height: 100%;
    margin-left: 1rem;
    outline: 0;
    color: #E7E7EB;
    border: 1px solid #3C47E9;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
`;

function SearchNav({ navigation }) {
    const {getLocId, getWeather, locations} = useContext(WeatherContext);
    const [val, setVal] = useState("");

    return (
        <Wrapper id='wrapper'>
            <div style={{display: 'flex', 
                        justifyContent: 'flex-end', 
                        padding: '1rem',
                    }}
            >
                <Close 
                    onClick={() => navigation(state => !state)} 
                    style={{cursor: 'pointer'}}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SearchIcon />
                <SearchBar 
                    placeholder='Search location'
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                <SearchBtn onClick={() => getLocId(val)}>Search</SearchBtn>
            </div>
            <div 
                style={{display: 'flex', 
                        flexDirection: 'column', 
                        padding: '1rem', 
                        margin: '2rem',
                        height: '75vh',
                        overflowY: 'scroll'}}
            >
                {locations.map((loc, id) => (
                        <Location 
                            key={id}
                            onClick={() => {
                                navigation(state => !state);
                                getWeather(loc.woeid);
                            }}
                        >{loc.title}</Location>
                    ))
                }
            </div>
            
        </Wrapper>
    );
}

export default SearchNav;