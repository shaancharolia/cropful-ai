const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-8">
        {/* Logo Section */}

        <div className="text-2xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Buttons Section */}
        <div className="space-x-4">
          <button className=" hover:blue-700 text-black font-bold py-2 px-4 rounded">
            How it Works
          </button>
          <button className=" hover:gray-300 text-black font-bold py-2 px-4 ">
            About Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
