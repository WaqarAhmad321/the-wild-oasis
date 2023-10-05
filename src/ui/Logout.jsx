import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import useLogout from "../features/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";

function Logout() {
  const { logout, isLoggingout } = useLogout();
  
  return (
    <ButtonIcon onClick={logout} disabled={isLoggingout}>
      {!isLoggingout ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
