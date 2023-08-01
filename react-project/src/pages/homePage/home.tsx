import code from "../../img/code.jpg";
import "../../style/homePageStyle.css";
import cdoe02 from "../../img/code02.jpg";

function homePage() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <img src={code} alt="codeImg" className="imgs" />
      </div>
      <div>
        <img src={cdoe02} className="imgs" />
      </div>
    </div>
  );
}

export default homePage;
