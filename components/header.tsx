import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center  justify-start m-4">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
    </header>
  );
};

export default Header;
