import { LoginPage } from "../../components/login/LoginPage";
import mountain from "./assets/mountain.png";

const LandingPage = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center gap-20 min-w-screen bg-Mercury text-Shark font-Ubuntu">
        <section className="p-10">
          <div className="w-52 h-52 -rotate-12 bg-[#BFB8C7] rounded-3xl flex items-center justify-center">
            <span className="material-symbols-outlined scale-[6]">
              radio_button_checked
            </span>
          </div>
          <div className="p-3 z-30 absolute bottom-[16.9rem] left-[17rem] drop-shadow-2xl rotate-12 w-52 h-52 bg-Shark text-Mercury rounded-3xl flex flex-col justify-between gap-2">
            <figure className="w-full h-96 bg-Mercury/90 rounded-3xl overflow-hidden p-3 ">
              <img
                src={mountain}
                alt=""
                className="h-full w-full object-contain "
              />
            </figure>
            <article className="h-full w-full ">
              <h2 className="text-2xl">
                <strong>Mountain</strong>
              </h2>
            </article>
          </div>
        </section>
        <section className="flex flex-col justify-around h-full gap-10">
          <h1 className="text-6xl border-b-4 border-Shark">
            <strong>Memory Language</strong>
          </h1>
          <section className="flex w-full gap-20 item-center">
            <LoginPage />
          </section>
        </section>
      </main>
    </>
  );
};

export { LandingPage };
