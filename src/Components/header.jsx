import React from 'react';

const header = () => {
  return (
    <>
       <div className="navbar bg-base-100 shadow-md px-4">
      {/* Left: Brand name */}
      <div className="navbar-start">
        <a className="text-xl font-bold text-primary">WaterButtol</a>
      </div>

      {/* Center: Menu items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Bottles</a></li>
          <li><a>Connect Us</a></li>
        </ul>
      </div>

      {/* Right: Login button */}
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary">Login</button>
      </div>

      {/* Mobile: Dropdown menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Bottols</a></li>
          <li><a>Connect Us</a></li>
          <li><a className="btn btn-outline btn-primary mt-2">Login</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default header;
