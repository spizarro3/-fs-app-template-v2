import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin === true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");        
  };
  
  const loggedOutNavigation = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
    { name: "Products", href: "/products" },
    { name: "Cart", href: "/cart"},
    { name: "Admin Portal", href: "/adminlogin" },
  ];

  const loggedInNavigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Cart", href: "/cart"},
    { name: "Admin Portal", href: "/adminlogin" },
  ];

  return (
    <>
      <h1 className="text-white bg-gray-900 flex justify-center text-4xl p-7 brightness-50 italic">
        Grace Shopper
      </h1>
      {isLoggedIn && !isAdmin ? (
        <div className="hidden p-8 text-lg lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          {loggedInNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-900 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
          <button
            className="font-semibold text-gray-900 hover:text-gray-900"
            onClick={logoutAndRedirectHome}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden p-8 text-lg lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
          {loggedOutNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-900 hover:text-gray-900"
              >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
