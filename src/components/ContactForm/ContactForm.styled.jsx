import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const FormCont = styled.div`
flex-direction: column;
align-items: center;
display: flex;
justify-content: center;
`;

export const Label = styled.label`
color: rgb(84 93 102);;
display: block;
margin-bottom: 10px;
font-size: 20px;
font-weight: 600;
display: block;
margin-bottom: 15px;
`;

export const Input = styled(Field)`
border-radius: 4px;
margin-bottom: 25px;
height: 25px;
width: 300px;
border: 0px;
outline: none;

&:hover {
  width: 310px;
  height: 27px;
}
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
  text-align: center;
`;
export const Btn = styled.button`
color: white;
width: 250px;
height: 30px;
font-size: 15px;
font-weight: 500;
background-color: rgb(43 51 51 / 69%);
border-radius: 4px;
border: 0px;
box-shadow: 5px 5px 5px 5px rgba(255, 253, 253, 0.336);
transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;
