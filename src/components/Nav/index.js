import React, { useState } from 'react';
import { useReactPWAInstall } from "react-pwa-install";
import myLogo from "../../assets/images/hello.png";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pwaInstall, isInstalled } = useReactPWAInstall();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    pwaInstall({
      title: "Install Hello World!",
      logo: myLogo,
      features: (
        <ul>
          <li>Use hello world app offline</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
        </ul>
      ),
      description: "This is how the install dialog looks like. Here you can describe your app briefly.",
    })
      .then(() => alert("App installed successfully"))
      .catch(() => alert("User opted out from installing"));
  };

  return (
    <div>
      <button className="nav" onClick={toggleMenu}>| | |</button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {!isInstalled() && (
          <button type="button" onClick={handleClick}>Install app</button>
        )}
        </nav>
      )}
    </div>
  );
};

export default Nav;