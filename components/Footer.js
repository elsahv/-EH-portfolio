const today = new Date();

const FooterSection = () => {
  return (
    <footer className="bg-gray-300 p-5 flex justify-center">
      <p className=" text-black">Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default FooterSection;
