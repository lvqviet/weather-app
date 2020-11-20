import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 22rem;
height: 8rem;
padding: 1rem;
margin-top: 1rem;
color: white;
background-color: #1E213A;
`;

const Info = styled.div`
    h1 {
        font-size: 3.5rem;
        margin: 0;
    }

    span {
        font-size: 2rem;
        font-weight: 300;
    }
`;

function Highlight({value, title, unit}) {
    return (
        <Wrapper>
            <span>{title}</span>
            <Info>
                <h1>{value} <span>{unit}</span></h1>
            </Info>
            

        </Wrapper>
    );
}

export default Highlight;