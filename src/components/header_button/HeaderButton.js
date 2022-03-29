import { useNavigate } from "react-router-dom";
import {StyledButton} from "./HeaderButton.styles";

const HeaderButton = ({path, children, display}) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`${path}`);
  }

  return (
    <StyledButton type="button" onClick={handleClick} display={display}>
      {children}
    </StyledButton>
  );
}

export default HeaderButton;