import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {
        min-height: 60px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;

    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    color: ${props => props.theme.accentColor1 };
    font-family: Segoe UI;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Img = styled.img`
    display: flex;
    height: 30px;
`;
export const Name = styled.a`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeTitle};
    color: ${props => props.theme.accentColor1 };
    font-weight: 700;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 5px 140px 0px 0px;
    cursor: pointer;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Buttons = styled.div`
   display:flex;
`;

