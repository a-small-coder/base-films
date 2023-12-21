import styled from 'styled-components';


export const MenuItem = styled.a`

display: flex;
align-items: center;
font-size: ${props => props.theme.textSizeM};
color: ${props => props.theme.accentColor1 };
font-weight: 700;
font-family: Roboto;
letter-spacing: 1px;
margin: 5px 0px 0px 0px;
cursor: pointer;
&:hover {
    text-decoration: underline;
}
@media (max-width: 768px) and (min-width: 576px)  {
    font-size: ${props => props.theme.textSizeTextM500};
}
@media (max-width: 576px)  {
    font-size: ${props => props.theme.textSizeTextM500};
}
`