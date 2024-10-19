
const Header = () => {
    

    function clickAbout() {
        window.location.href ='/about';
    }
    function clickHome() {
        window.location.href = '/';
    }

    
  
    return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-8">
        {/* Logo Section */}

        <div className="text-2xl font-bold">
          <a href="/">
            <img
              onClick={clickHome}
              src=".\src\assets\Cropful_logo.png"
              alt="Logo"
              className="h-14 w-auto"
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
          <button onClick={clickAbout} className="text-black font-bold py-2 px-4">
            About Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
