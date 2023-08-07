import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { ThemeContext } from "../context/ThemeContext";
import { text } from "stream/consumers";

type props = { numberOFFields: number } & Partial<typeof defaultProps>;
const defaultProps = {
  mainTitle: "Sign Up",
  secondTitle: "Create your account",
  textButtonSumbit: "Next",
  Ispasword: [1, 0], //[isPassword , indexOfField]
  Isemail: [1, 0], //[isEmail , indexOfField]
  label: ["password", "email", "text"],
};

function BaseSignUp(propsIN: props) {
  const props = { ...defaultProps, ...propsIN };
  const [fields, setFields] = useState(
    new Array(props.numberOFFields).fill("")
  );
  const [isPassword, setIsPassword] = useState(
    props.Ispasword[props.Ispasword[1]]
  );
  const [isEmail, setIsEmail] = useState(props.Isemail[0]);
  const [indexOfInput, setIndexOfInput] = useState(props.Ispasword[1]);
  const [indexOfInputEmail, setIndexOfInputEmail] = useState(props.Isemail[1]);
  const { theme } = useContext(ThemeContext);

  return (
    <div id="wraper">
      <div id="titleWarper">
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>
          {props.mainTitle}
        </h1>
      </div>
      <div id="secondTitleWarper">
        <h2
          style={{
            color: theme === "light" ? "black" : "white",
          }}
        >
          {props.secondTitle}
        </h2>
      </div>
      {props.label.map((label, index) => {
        if (
          label === "password" ||
          label === "Password" ||
          label === "passwordValidation"
        ) {
          return (
            <div key={index}>
              <TextField
                style={{
                  WebkitTextFillColor: theme === "light" ? "black" : "white",
                  border:
                    theme === "light" ? "1px solid white" : "1px solid black",
                  borderRadius: "5px",
                }}
                type="password"
                placeholder={label + "..."}
                label={label}
              />
            </div>
          );
        } else if (label === "email" || label === "Email") {
          return (
            <div key={index}>
              <TextField
                style={{
                  WebkitTextFillColor: theme === "light" ? "black" : "white",
                  border:
                    theme === "light" ? "1px solid white" : "1px solid black",
                  borderRadius: "5px",
                }}
                type="Email"
                placeholder={label + "..."}
                label={label}
              />
            </div>
          );
        }
        return (
          <TextField
            style={{
              color: theme === "light" ? "black" : "black",
              WebkitTextFillColor: theme === "light" ? "black" : "white",
              border: theme === "light" ? "1px solid white" : "1px solid black",
              borderRadius: "5px",
            }}
            type="text"
            placeholder={label + "..."}
            label={label}
          />
        );
      })}
    </div>
  );
}
export default BaseSignUp;
