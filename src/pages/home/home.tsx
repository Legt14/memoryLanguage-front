import { HeaderComponent } from "./components/headerComponent/headerComponent";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LandingPage } from "./pages/landing/landing";
import { LoaderComponent } from "./components/loaderComponent/LoaderComponent";

const HomePage = () => {
  const location = useLocation().pathname;
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (<LoaderComponent />);
  }

  return (
    <>
      {!isAuthenticated && <LandingPage />}
      {isAuthenticated && (
        <>
          <section className="p-3 flex items-stretch gap-4 min-h-screen min-w-screen bg-Mercury font-Ubuntu">
            <HeaderComponent />
            <main className="w-full p-5  bg-Shark rounded-3xl drop-shadow-2xl flex items-center justify-center">
              {location !== "/" ? (
                <Outlet />
              ) : (
                <section className="grid grid-rows-3 grid-flow-col gap-4 text-Mercury"></section>
              )}
            </main>
          </section>
        </>
      )}
    </>
  );
};

export { HomePage };
