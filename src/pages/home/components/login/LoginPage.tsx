import { useAuth0 } from "@auth0/auth0-react";
import { ButtonStyleComponent } from "../../../../styled_Components/button/button";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const handleClick = () => {
    loginWithRedirect();
  };

  return (
    <>
      <ButtonStyleComponent Onclick={handleClick} children={"play_circle"} bg="bg-Shark" t_color="text-Mercury"/>
    </>
  );
};

export { LoginPage };
