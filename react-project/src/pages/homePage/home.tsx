import code from "../../img/code.jpg";
import "../../style/homePageStyle.css";
import cdoe02 from "../../img/code02.jpg";

function homePage() {
  return (
    <div id="homeWarper">
      <div>
        <h1>Home</h1>
      </div>
      <div className="imgWarper">
        <div className="img">
          <img src={cdoe02} className="imgs" />
        </div>
        <div className="img">
          <img src={cdoe02} className="imgs" />
        </div>
      </div>

      <div className="imgWarper">
        <div className="img">
          <img src={code} alt="codeImg" className="imgs" />
        </div>
        <div className="img">
          <img src={code} alt="codeImg" className="imgs" />
        </div>
      </div>
    </div>
  );
}

export default homePage;
