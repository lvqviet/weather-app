import React from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import styled from 'styled-components';

const SearchWrapper = styled.div`
    width: 100%; 
    height: 4rem;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 0.5;
`;

const Button = styled.button`
    background-color: #1e213a;
    font-size: 25px;
    color: white;
    cursor: pointer;
    border: none;

    :hover {
        background-color: #6E707A;
    }
`;

function Search({ event }) {


    return (
        <SearchWrapper>
                <Button onClick={event}>Search for places</Button>
                <MyLocationIcon style={{backgroundColor: '#6E707A', padding: '0.2rem', borderRadius: '50px'}}/>
        </SearchWrapper>
    );
}

export default Search;