const ButtonSubmit = ({ btnText }: { btnText: string }) => {
  return (
    <button
      type="submit"
      className="bg-primary-400 hover:bg-primary-600 mt-10 w-full rounded-sm py-3 text-center text-white transition-colors ease-in-out"
    >
      {btnText}
    </button>
  );
};

export default ButtonSubmit;
