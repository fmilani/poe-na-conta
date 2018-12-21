import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.primary ? 'black' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
  border: 2px solid black;
  font-size: 1.2rem;
  padding: 10px;
  min-width: 10rem;
  &:disabled {
    background-color: darkgray;
    color: gainsboro;
  }
`;

export default Button;
