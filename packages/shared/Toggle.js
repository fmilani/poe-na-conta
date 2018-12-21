import React from 'react';
import styled from 'styled-components';

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  display: none;
  &:checked + ${Slider} {
    background-color: #000;
  }
  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Toggle = () => (
  <label
    style={{
      position: 'relative',
      display: 'inline-block',
      width: 60,
      height: 34,
    }}
  >
    <Checkbox type="checkbox" style={{ display: 'none' }} />
    <Slider />
  </label>
);

export default Toggle;
