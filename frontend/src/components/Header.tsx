const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-8">
        {/* Logo Section */}

        <div className="text-2xl font-bold">
          <a href="/">
            <img
              src=".\src\assets\logo.png"
              alt="Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-white"></span>{" "}
            {/* Company Name */}
          </a>
        </div>

        {/* Buttons Section */}
        <div className="space-x-4">
          <button className="text-black font-bold py-2 px-4 rounded">
            How it Works
          </button>
          <button className="text-black font-bold py-2 px-4">About Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
