import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobileNavbar from "./Modal";

// navbar icons
import { IconOne, IconThree } from "../utils/NavIcons";

// function to join classnames
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [navigation, setNavigation] = useState([
    {
      name: "Home",
      href: "/home",
      current: false,
      icon: IconOne,
    },
    {
      name: "Test",
      href: "/test",
      current: false,
      icon: IconThree,
    },
  ]);

  // handle refresh
  useEffect(() => {
    handleNavItemClick(window.location.pathname);
  }, []);

  const handleNavItemClick = (itemHref) => {
    setNavigation(
      [...navigation].map((object) => {
        if (object.href === itemHref) {
          return { ...object, current: true };
        }
        return { ...object, current: false };
      })
    );
  };

  // redirects to previous page history.
  const goBack = () => {
    let navigate = useNavigate();
    return navigate(-1);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex bg-black justify-between h-28">
        <div className="space-x-4 p-7 flex items-center">
          {/* replace image */}
          <Link
            to="/"
            onClick={() => {
              handleNavItemClick("/");
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              width={80}
            />
          </Link>
        </div>
        <div className="hidden sm:d-none md:flex space-x-4 p-7 items-center justify-around w-5/6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-sky-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-10 sm:text-sm md:text-md lg:text-xl font-medium flex items-center h-4/5 text-center"
              )}
              aria-current={item.current ? "page" : undefined}
              onClick={() => goBack()}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="sm:flex md:hidden space-x-4 p-7 items-center">
          <MobileNavbar
            navigation={navigation}
            handleNavItemClick={handleNavItemClick}
          />
        </div>
      </div>
    </div>
  );
}
