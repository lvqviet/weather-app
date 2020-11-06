import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 22rem;
    height: 10rem;
    padding: 1rem;
    color: white;
    background-color: #1E213A;

    p {
        margin: 0;
    }

    h1 {
        margin: 0;
        margin-bottom: 1.5rem;
        font-size: 3.5rem;

        span {
            font-size: 2rem;
            font-weight: 300;
        }
    }
`;

const ProcessBar = styled.div`
    position: relative;
    background-color: #e7e7eb;
    border-radius: 80px;
    width: 80%;
    height: 0.5rem;

    span {
        position: absolute;
        top: -18px;
        opacity: 0.5;
        font-size: 0.8rem;
    }

    span:nth-child(1) {
        left: 0;
    }

    span:nth-child(2) {
        left: 50%;
        transform: translateX(-50%);
    }

    span:nth-child(3) {
        right: 0;
    }

    span:nth-child(4) {
        top: 12px;
        right: 0;
    }
`;

function Humidity({humidity}) {
    return (
        <Wrapper>
            <p>Humidity</p>
            <h1>{humidity} <span>%</span></h1>
            <ProcessBar>
                <span>0</span>
                <span>50%</span>
                <span>100%</span>
                <span>%</span>
                <div style={{
                    width: `${humidity}%`, 
                    height: '0.5rem',
                    borderRadius: '80px',
                    backgroundColor: '#FFEC65'}}
                ></div>
            </ProcessBar>
        </Wrapper>
    );
}

export default Humidity;