import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  border: 2px solid;
  &:hover {
    outline: none;
    background-color: lightyellow;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export default Input;
