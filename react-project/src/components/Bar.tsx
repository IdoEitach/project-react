import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import "../style/nvarBar.css";
import { AppBar } from "@mui/material";

function Nvarbar() {
  const navigate = useNavigate();

  const navigateSingUp = () => {
    navigate("/signUp");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div id="NvarBar">
      <div className="Button">
        <Button variant="contained" onClick={navigateSingUp}>
          sign up
        </Button>
      </div>
      <div className="Button">
        <Button variant="contained" onClick={navigateHome}>
          home
        </Button>
      </div>
    </div>
  );
}
export default Nvarbar;
