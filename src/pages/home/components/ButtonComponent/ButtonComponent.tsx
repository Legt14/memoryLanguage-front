import { Link, useLocation } from "react-router-dom";

// Component contain Google icons
interface Icon {
  iconName: string;
  link?: string;
  text_color?: string;
  hover_color?: string;
}

const ButtonComponent = ({ iconName, link, text_color, hover_color }: Icon) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <button
        className={`group hover:text-SeaBuckthorn select-none w-12 h-12 flex justify-center items-center `}
      >
        <span
          className={`material-symbols-outlined ${
            link
              ? link === location.pathname ||
                `${link}/play` === location.pathname
                ? "text-SeaBuckthorn scale-150 "
                : "text-[#BFB8C7]"
              : `hover:text-color:${hover_color} text-color:${text_color}`
          } cursor-pointer text-4xl transition-all ease-in delay-75 duration-200 group-hover:scale-150 text-center`}
        >
          {link ? <Link to={link}>{iconName}</Link> : iconName}
        </span>
      </button>
    </>
  );
};

export { ButtonComponent };
