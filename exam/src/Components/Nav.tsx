function Nav() {
  const navAccess = localStorage.getItem("navAccess");
  return (
    <div>
      {navAccess == "false" && (
        <ul className="flex justify-between py-6 bg-gray-900 text-white">
          <img
            className="w-32 ml-8"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
          <div className="flex gap-5 mr-8 text-xl font-semibold">
            <a href="/">
              {" "}
              <li className="hover:text-yellow-400 cursor-pointer">Log in</li>
            </a>
            <a href="/SignUp">
              {" "}
              <li className="hover:text-yellow-400 cursor-pointer">Sign up</li>
            </a>
          </div>
        </ul>
      )}

      {navAccess == "true" && (
        <ul className="flex justify-between py-4 bg-gray-900 text-white items-center">
          <div className="flex gap-5">
            <img
              className="w-24 ml-8 py-2 px-2 hover:border border-white cursor-pointer"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="flex flex-col justify-center items-center hover:border border-white cursor-pointer">
              <p className="text-xs font-extralight">Delever to</p>
              <div className="flex gap-1 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-sm font-bold">Saudi Arabia</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mr-8 text-xl font-semibold">
            <a href="/Cart" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            </a>

            <a href="/Home">
              {" "}
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            </a>

            <a href="/">
              {" "}
              <li className="hover:text-yellow-400 cursor-pointer">Log out</li>
            </a>
          </div>
        </ul>
      )}
    </div>
  );
}

export default Nav;
