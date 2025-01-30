

const Button = ({title, children}) => {
  return (
    <div>
      <button
        className="bg-[#0000FF] py-2 px-9 text-white mt-4 hover:bg-[#00A2B0]"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
