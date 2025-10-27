import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load th authenticated user
  const { isAuthenticate, isLoading } = useUser();

  //2. If there is No authenticated user, redirect to th login
  useEffect(
    function () {
      if (!isAuthenticate && !isLoading) navigate("/login");
    },
    [isAuthenticate, isLoading, navigate]
  );

  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  //4. if there is a user, render the app
  if (isAuthenticate) return children;
}

export default ProtectedRoute;
