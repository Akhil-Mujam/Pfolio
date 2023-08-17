import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import my_navbar_data from './assets/NavData';


const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isbtnActive, setBtnActive] = useState(false);
  const [isBtnClick, setBtnClick] = useState(0);

  const handleClick = () => {
    setActive(!isActive);
    setBtnActive(!isbtnActive);
  };

  // const handleNavClick = (index) => {
  //   setBtnClick(index);
  //   localStorage.setItem("activeIndex", index);
  // };

  // useEffect(() => {
  //   const storedValue = localStorage.getItem("activeIndex");
  //   setBtnClick(storedValue);
  // }, [isBtnClick]);

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
            <img src="data:image/jpeg;base64,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" alt="logo" />
          </HashLink>
        </div>
        <div className={isActive ? 'active_links  ' : 'links'}>
          <div className="MenuItems ">
            {my_navbar_data.map((data, index) => {
              return (
                <HashLink
                  className={isBtnClick === index ? 'active_navbtn' : 'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    if (data.another_page === true)
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

                    setActive(false);
                    setBtnActive(false);
                    setBtnClick(index);
                  }}
                >
                  <span
                    style={{
                      height: '39px',
                      alignItems: 'center',
                      paddingBottom: '1px',
                    }}
                  >
                    <data.nav__icon />
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i
            className={isActive ? 'fas fa-times' : 'fas fa-bars-staggered'}
            style={{
              fontSize: '21px',
              fontWeight: '600',
              color: '#fff',
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
