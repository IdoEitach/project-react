import { useState , useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { ThemeContext } from "../context/ThemeContext";

type props = {numberOFFields: number} & Partial<typeof defaultProps>;
const defaultProps = {
  mainTitle: "Sign Up",
  secondTitle: "Create your account",
  textButtonSumbit: "Next",
  Ispasword: [1, 0], //[isPassword , indexOfField]
  Isemail: [1, 0], //[isEmail , indexOfField]
  label : ["password" , "email" , "text"],
};

function BaseSignUp(propsIN: props) {
  const props = { ...defaultProps, ...propsIN };
  const [fields , setFields] = useState(new Array(props.numberOFFields).fill(""));
  const [isPassword , setIsPassword] = useState(props.Ispasword[props.Ispasword[1]]);
  const [isEmail , setIsEmail] = useState(props.Isemail[0]);
  const [indexOfInput , setIndexOfInput] = useState(props.Ispasword[1]);
  const [indexOfInputEmail , setIndexOfInputEmail] = useState(props.Isemail[1]);
  

  return (<div id="wraper">
<div id="titleWarper"><h1>{props.mainTitle}</h1></div>
<div id="secondTitleWarper"><h2>{props.secondTitle}</h2></div>
{props.label.map((label , index) => {
  if(label === "password"|| label === "Password"){
    return (<div><TextField type="password" placeholder={label + "..."} label={label} /></div>);
  }
  return <TextField type="text" placeholder={label + "..."} label={label} />
}
  , )}
<Button variant="contained" size="large">next</Button>
  </div>);

};
export default BaseSignUp;
