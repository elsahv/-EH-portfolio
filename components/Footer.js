const today = new Date();

const FooterSection = () => {
  return (
    <footer className="bg-lavender p-5 flex justify-center">
      <p className=" text-black">Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default FooterSection;
