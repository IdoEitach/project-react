import code from "../../img/code.jpg";
import "../../style/homePageStyle.css";
import cdoe02 from "../../img/code02.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="homeWarper">
      <div>
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>Home</h1>
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

export default HomePage;
