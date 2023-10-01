const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2
        rounded-full border px-7 py-4
        font-montserrat text-lg leading-none ${fullWidth && 'w-full'}
          ${
            backgroundColor
              ? `${backgroundColor} ${textColor} ${borderColor}`
              : `
           border-coral-red bg-coral-red text-white
          `
          }
        `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 h-5 w-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;
