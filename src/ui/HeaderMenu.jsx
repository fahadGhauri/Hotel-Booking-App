import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { HiOutlineUser } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkModeTogglr from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const nagivate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => nagivate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeTogglr />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
