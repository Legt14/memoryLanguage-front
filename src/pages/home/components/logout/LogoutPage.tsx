import { useAuth0 } from "@auth0/auth0-react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const LogoutComponent = () => {
  const { logout } = useAuth0();
  return (
    <>
      <span onClick={()=>logout(({ logoutParams: { returnTo: window.location.origin } }))}>
        <ButtonComponent iconName="logout" />
      </span>
    </>
  );
};
export { LogoutComponent };
