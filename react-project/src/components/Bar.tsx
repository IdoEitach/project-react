import Button from "@mui/material/Button/Button";
import { Link, useNavigate } from "react-router-dom";
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
    <AppBar position="static">
      <div id="NvarBar">
        <Button variant="contained" onClick={navigateSingUp}>
          sign up
        </Button>

        <Button variant="contained" onClick={navigateHome}>
          home
        </Button>
      </div>
    </AppBar>
  );
}
export default Nvarbar;
