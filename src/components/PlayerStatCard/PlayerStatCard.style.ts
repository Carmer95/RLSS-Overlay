import styled from "styled-components";

export const StatCardWrapper = styled.div`
    background: green;
    color: black;
    height: 150px;
    width: 600px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    position: absolute;
    font-weight: bold;
    left: 25px;
    bottom: 50px;
    margin-bottom: 0;
`;

export const StatTarg = styled.p`
    font-size: 24px;
    margin: 10px 0 0 0;
`;

export const StatCardStatContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 600px;
`;

export const StatCardStatName = styled.p`
    font-size: 24px;
    margin: 0;
`;

export const StatCardStatValue = styled.p`
    font-size: 36px;
    margin: 0;
`;