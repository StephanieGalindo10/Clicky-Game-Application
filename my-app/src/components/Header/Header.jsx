import React from "react";

function Header() {
  return (
    <div className="align-items-center bg-header jumbotron header-hgt header-pad head-mar-top nav-shadow neon text-center yx-auto text-center">
      <h1> Try to Esape from Slient Hill</h1>

      <h3 className="flicker-1 header-font">
        Click on an image to earn points,
      </h3>
      <h3 className="flicker-1 header-font">
        But  beware don't click on any more than once!
      </h3>
    </div>
  );
}

export default Header;