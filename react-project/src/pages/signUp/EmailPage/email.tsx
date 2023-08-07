import BaseSignUp from "../../../components/baseSignUp";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button/Button";

function Email() {
  const navigate = useNavigate();
  const navigateUserName = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <div>
        <BaseSignUp numberOFFields={2} label={["Email"]} secondTitle="Email" />
      </div>
      <div>
        <div></div>
        <div>
          <Button variant="contained" size="large" onClick={navigateUserName}>
            back
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Email;
