import { useState } from "react";
import { TextField } from "@mui/material";


type props = {numberOFFields: number} & Partial<typeof defaultProps>;
const defaultProps = {
  mainTitle: "Sign Up",
  secondTitle: "Create your account",
  textButtonSumbit: "Next",
  Ispasword: [false, 0], //[isPassword , indexOfInput]
  Isemail: [false, 0], //[isEmail , indexOfInput]
  label : ["password" , "email" , "text"],
};

function BaseSignUp(propsIN: props) {
  const props = { ...defaultProps, ...propsIN };
  const [fields , setFields] = useState(new Array(props.numberOFFields).fill(""));
  const [isPassword , setIsPassword] = useState(props.Ispasword[0]);
  const [isEmail , setIsEmail] = useState(props.Isemail[0]);
  const [indexOfInput , setIndexOfInput] = useState(props.Ispasword[1]);
  const [indexOfInputEmail , setIndexOfInputEmail] = useState(props.Isemail[1]);
  
  const AddFildes = () => {
    
  };

  return (<div id="wraper">
    {fields.map((field :number , index:number) => (<div >
      <TextField placeholder="text..." label={props.label[index]} /> </div>), )}
  </div>);
}

export default BaseSignUp;
