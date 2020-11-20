import React from 'react';
import styled from 'styled-components';
import Arrow from '@material-ui/icons/ArrowForwardIos';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    :hover {
        border: 1px solid #616475;
    }
`;

function Location({ children, ...props }) {
    return (
        <Wrapper {...props}>
            {children}
            <Arrow fontSize='small' style={{color: "#616475"}}/>
        </Wrapper>
    );
}

export default Location;