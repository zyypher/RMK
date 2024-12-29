import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Headerthree = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    router.events.on("routeChangeStart", removeActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", removeActive);
    };
  }, [router.events]);

  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".submenu").style.display = "none";
    });
  }

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
    closeAllMenus();
  };
  //............submenu...............
  function removeActive() {
    window.onload = function () {
      const element = document.getElementById("menu");
      if (element) {
        element.classList.remove("active");
      }
      const icon = document.getElementById("icon");
      if (icon) {
        icon.classList.remove("active");
      }
    };
  }

  function toggleActive(event) {
    event.preventDefault();
    const mediaQuery = window.matchMedia("(max-width: 991px)");

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle("open");
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === "none") {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    }
  }
  const toggleSearchField = () => {
    document.querySelector(".searchbar")?.classList.toggle("show");
  };
  return (
    <>
      <div className="searchbar">
        <div className="searchbar__wrapper">
          <div className="searchbar__inner">
            <form className="form form-subscribe">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control style1"
                  placeholder="Search now..."
                />
                <span className="input-group-btn">
                  <button className="trk-btn search-btn trk-btn--primary3" type="submit">
                    Search
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="searchbar__close" onClick={toggleSearchField}>
            X
          </div>
        </div>
      </div>
      <header
        className={`header-section home3 ${scrollPosition > 100 ? "header-fixed fadeInUp" : ""
          }`}
      >
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-start header-start--style2">
                <div className="logo">
                  <Link href="">
                    <img src="/images/logo/rmk-logo.png" alt="logo" style={{ width: '200px' }} />
                  </Link>
                </div>
                <div className="menu-area">
                  <ul className={`menu menu--style2 ${activeMenu ? "active" : ""}`}>
                    <li>
                      <Link href="/">
                        Home
                      </Link>
                      <Link href="/about">
                        About
                      </Link>
                      <Link href="/courses">
                        Courses
                      </Link>
                      <Link href="/blogs">
                        Blogs
                      </Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link href="/">Home 1</Link>
                        </li>
                        <li>
                          <Link href="/index2">Home 2</Link>
                        </li>
                        <li>
                          <Link href="/index3">Home 3</Link>
                        </li>
                        <li>
                          <Link href="/index4">Home 4</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-end">
                <div className="menu-area">
                  {/* <div className="header-btn">
                    <Link
                      href=""
                      onClick={toggleSearchField}
                      className="trk-btn trk-btn--search"
                    >
                      <span>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </span>
                    </Link>
                    <Link href="/signup" className="trk-btn trk-btn--secondary3">
                      {"Register  "}
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div> */}

                  <div
                    className={`header-bar d-xl-none home3 ${activeMenu ? "active" : ""}`}
                    onClick={toggleMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


    </>
  );
};

export default Headerthree;
