import BaseSignUp from "../../../components/baseSignUp";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button/Button";

function UserNamePage() {
  const navigate = useNavigate();
  const navigateEmail = () => {
    navigate("/email");
  };
  const navigateUserName = () => {
    navigate("/signUp");
  };
  return (
    <div>
      <div>
        <BaseSignUp
          numberOFFields={2}
          label={["Username", "password", "passwordValidation"]}
          secondTitle="UserName"
        />
      </div>

      <div>
        <div>
          <Button variant="contained" size="large" onClick={navigateEmail}>
            next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default UserNamePage;
