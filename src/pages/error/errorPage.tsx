import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <article className="p-20 min-h-screen w-full flex flex-col justify-center items-center gap-10 text-Shark select-none">
        <h1 className="text-6xl">
          <strong>
            Oops<span className="text-SeaBuckthorn animate-pulse">!</span>
          </strong>
        </h1>
        <p>
          <i className="border-b-2 border-SeaBuckthorn">
            {error.status}, {error.statusText}
          </i>
        </p>
      </article>
    </>
  );
};
export { ErrorPage };
