import { Outlet, useLocation } from "react-router-dom";
import { LanguageComponent } from "../../components/language/language";

const MemoryPage = () => {
  const location = useLocation();
  return (
    <>
      <section className="p-5 flex flex-col items-center justify-center">
        {location.pathname !== "/memory" ? <Outlet /> : <LanguageComponent />}
      </section>
    </>
  );
};

export { MemoryPage };
