type props = {numberOFFields: number} & Partial<typeof defaultProps>;
const defaultProps = {
  mainTitle: "Sign Up",
  secondTitle: "Create your account",
  textButtonSumbit: "Next",
  Ispasword: [false, 0], //[isPassword , indexOfInput]
  Isemail: [false, 0], //[isEmail , indexOfInput]
};

function BaseSignUp(propsIN: props) {

    const [F]

    Fields.map()=>{

    };

    const createInputFields =()  => {
        return (
            for(let i = 0; i<props.numberOFFields ; i++){
                {<div></div>}
            }
        )
    };

  const props = { ...defaultProps, ...propsIN };


  return (<div id="wraper">
    
  </div>);
}

export default BaseSignUp;
