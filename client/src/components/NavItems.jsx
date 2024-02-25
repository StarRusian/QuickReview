import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/newlogo.png";
import { Avatar, Button, Dropdown, DropdownItem } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //addevent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      className={`header-section style-3 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      {/* <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">
              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div> */}

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : "/"}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Products</Link>
                  </li>
                  {/* <li><Link to="/blog">Blog</Link></li> */}
                  {/* <li><Link to="/about">About</Link></li> */}
                  {/* <li><Link to="/contact">Contact</Link></li> */}
                </ul>
              </div>
              {/* sign in and log in */}

              {/* <Link to="/signup" className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link> */}
              {currentUser ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="user"
                      img={currentUser.profilePicture}
                      rounded
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">
                      @{currentUser.username}{" "}
                    </span>
                    <span className="block text-sm font-medium truncate">
                      {currentUser.email}{" "}
                    </span>
                  </Dropdown.Header>
                  <Link to={"/dashboard?tab=profile"}>
                    <DropdownItem>Profile</DropdownItem>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
                </Dropdown>
              ) : (
                <Link to="/signin">
                  <Button gradientDuoTone="purpleToBlue">Sign In</Button>
                </Link>
              )}

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
