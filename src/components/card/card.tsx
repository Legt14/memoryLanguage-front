interface Prop {
  id: number;
  word: string;
  image: string;
  flipped: boolean;
  matched: boolean;
  onClick: () => void;
}

const CardComponent = ({ id, word, image, flipped, onClick }: Prop) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <article
      key={id}
      onClick={handleClick}
      className={`
      w-32 h-32 p-3 cursor-pointer text-Shark rounded-lg select-none
      flex flex-col gap-2 justify-center items-center
      transition ease-in-out delay-0
      hover:bg-SeaBuckthorn/90 duration-75
      ${flipped ? "bg-Mercury text-Shark" : " bg-[#BFB8C7]"}
      `}
    >
      {flipped ? (
        <>
          <figure className="border border-Shark/25 w-full h-28 rounded-lg">
            <img src={image} alt={word} />
          </figure>
          <header className="w-full">
            <h2>
              <strong>{word}</strong>
            </h2>
          </header>
        </>
      ) : (
        <span className="material-symbols-outlined scale-[4]">
          radio_button_checked
        </span>
      )}
    </article>
  );
};

export { CardComponent };
