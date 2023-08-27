import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { LogoutComponent } from "../logout/LogoutPage";
const HeaderComponent = () => {
  return (
    <>
      <header className=" p-3 w-20 h-auto bg-Shark text-Mercury rounded-3xl flex items-center justify-center drop-shadow-2xl">
        <nav className="w-full h-full">
          <ul className="h-full flex flex-col justify-between items-center">
            <li className="flex-none">
              <ButtonComponent iconName="radio_button_checked" link="/" />
            </li>
            <ul className="flex flex-col justify-center items-center gap-4 grow">
              <li>
                <ButtonComponent iconName="neurology" link="/memory" />
              </li>
              <li>
                <ButtonComponent iconName="forum" link="/chat" />
              </li>
              <li>
                <ButtonComponent iconName="people" link="/profile" />
              </li>
            </ul>
            <li className="flex-none">
              <LogoutComponent />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { HeaderComponent };
