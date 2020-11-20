import React from 'react';
import styled from 'styled-components';
import Navigation from '@material-ui/icons/Navigation';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 22rem;
    height: 10rem;
    padding: 1rem;
    margin-bottom: 1rem;
    color: white;
    background-color: #1E213A;

    p {
        margin: 0;
    }

    h1 {
        margin: 0;
        font-size: 3.5rem;

        span {
            font-size: 2rem;
            font-weight: 300;
        }
    }
`;

const WindDirection = styled.div`
  position: relative;
  top: 12px;
  text-align: center;
  display: flex;
  align-items: center;

  span {
      margin: 0 10px;
  }
`;

function WindStatus({value, direction, degree }) {
    return (
        <Wrapper>
            <p>Wind status</p>
            <h1>{value} <span>mph</span></h1>
            <WindDirection>
                <Navigation style={{
                    transform: `rotate(${degree}deg)`,
                    padding: '6px',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'}}
                />
                <span>{direction}</span>
            </WindDirection>
        </Wrapper>
    );
}

export default WindStatus;