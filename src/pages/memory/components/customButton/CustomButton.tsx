interface Prop {
  iconName: string;
  click?: () => void;
}

function CustomButton({ iconName, click }: Prop) {
  return (
    <button
      type="button"
      onClick={click}
      className="rounded-lg flex items-center justify-center "
    >
      <span className="material-symbols-outlined text-5xl text-Shark hover:text-[#d1cbd7]">
        {iconName}
      </span>
    </button>
  );
}
export default CustomButton;
