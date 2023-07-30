
import BaseSignUp from "../../../components/baseSignUp";  



function UserNamePage() {
return (<div>
  <BaseSignUp numberOFFields={2} label={["Username","password"]} secondTitle="UserName"  />
    </div>);
};
export default UserNamePage;