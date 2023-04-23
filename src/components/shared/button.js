import styled from 'styled-components';

const mainColor = '#24E7C0'

const Button = styled.button`
cursor: pointer;
background-color: ${props => props.variant==='relleno' ? mainColor : 'white'};
display: inline-flex;
border-width: 2px;
align-items: center;
border-radius: 9999px;
color: ${props => props.variant==='relleno' ? 'white' : mainColor};
border-color:${mainColor};
outline-style:none;
justify-content:center;
opacity: ${props => (props.disabled ? 0.5 : 1)};
text-decoration: none;
`;

export default Button;
