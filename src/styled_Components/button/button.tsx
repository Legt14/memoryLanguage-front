type Props = {
  children: string | JSX.Element;
  Onclick: () => void;
  bg?: string;
  t_color?: string;
};
const ButtonStyleComponent = ({ children, Onclick, bg, t_color }: Props) => {
  const handleClick = () => {
    Onclick();
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`w-20 h-11 rounded-lg ${bg ? `${bg}` : "bg-Mercury"} ${
          t_color ? `${t_color}` : "text-Shark"
        } group transition-all ease-in hover:-translate-y-2 hover:scale-110 delay-0 duration-300 hover:bg-SeaBuckthorn flex items-center justify-center`}
      >
        <span className="material-symbols-outlined text-center scale-125 transition-all delay-75 duration-300 -rotate-180 group-hover:rotate-0">{children}</span>
      </button>
    </>
  );
};

export { ButtonStyleComponent };
