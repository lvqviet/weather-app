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
    border-radius: 2px;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
`;

const Loading = styled.div`
    margin: auto;
    background: transparent;

.loading-dot {
    float: left;
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: white;
    border-radius: 50%;
  
    opacity: 0;
    box-shadow: 0 0 2px black;
    animation: loadingFade 1s infinite;
}

.loading-dot:nth-child(1) {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    animation-delay: 0s;
}

.loading-dot:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    animation-delay: 0.1s;
}

.loading-dot:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    animation-delay: 0.2s;
}

.loading-dot:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    animation-delay: 0.3s;
}

@-webkit-keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}

@-moz-keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}

@keyframes loadingFade {
    0% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 0; }
}
`;

function SearchNav({ navigation }) {
    
    const {getWeather} = useContext(WeatherContext);
    const [val, setVal] = useState("");
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLocId = (loc) => {
        fetch(
          `https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?query=${loc}`,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setLocations(data);
            setLoading(false);
          })
          .catch(console.error);
      };

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
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    getLocId(val)
                    setLoading(true);
                }}
            >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SearchIcon />
                <SearchBar 
                    autoFocus
                    placeholder='Search location'
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                <SearchBtn type="submit">
                    Search
                </SearchBtn>
            </div>
            </form>

            <>
                {loading ? 
                (
                    <Loading>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                    </Loading>
                ) :
                (
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
                )
                }
            </>
            
            
        </Wrapper>
    );
}

export default SearchNav;