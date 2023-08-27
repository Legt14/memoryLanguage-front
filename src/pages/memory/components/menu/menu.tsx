import { useNavigate, useLocation } from "react-router-dom";
import CustomButton from "../customButton/CustomButton";

const MenuComponent = () => {
  const navigate = useNavigate();
  const state = useLocation().state
  
  console.log(state)

  const handleLanguage = () => {
    navigate("/memory");
  };

  const handlePlayAgain = () => {
    window.location.reload()
    // navigate(0);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="bg-Shark/20 backdrop-blur-sm z-40 absolute inset-0 flex items-center justify-center rounded-full">
        <section className="h-60 w-20 p-3 bg-SeaBuckthorn text-Shark rounded-2xl shadow-2xl flex items-center justify-center">
          <section className="h-full w-full flex flex-col justify-around items-center gap-7">
            <CustomButton iconName="autoplay" click={handlePlayAgain} />
            <CustomButton iconName="translate" click={handleLanguage} />
            <CustomButton iconName="home" click={handleHome} />
          </section>
        </section>
      </section>
    </>
  );
};
export { MenuComponent };
