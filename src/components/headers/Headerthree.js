import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MOBILE_MAX = 991;

const Headerthree = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const mqCheck = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia(`(max-width: ${MOBILE_MAX}px)`).matches);
    }
  }, []);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY || 0);
  }, []);

  const closeAllMenus = useCallback(() => {
    const elements = document.querySelectorAll(".menu-item-has-children.open");
    elements.forEach((item) => {
      item.classList.remove("open");
      const sub = item.querySelector(".submenu");
      if (sub) sub.style.display = "none";
    });
  }, []);

  const removeActive = useCallback(() => {
    const element = document.getElementById("menu");
    if (element) element.classList.remove("active");
    const icon = document.getElementById("icon");
    if (icon) icon.classList.remove("active");
  }, []);

  useEffect(() => {
    mqCheck();
    window.addEventListener("resize", mqCheck);
    window.addEventListener("scroll", handleScroll, { passive: true });
    router.events.on("routeChangeStart", removeActive);

    return () => {
      window.removeEventListener("resize", mqCheck);
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeStart", removeActive);
    };
  }, [handleScroll, mqCheck, removeActive, router.events]);

  const toggleMenu = () => {
    setActiveMenu((s) => !s);
    closeAllMenus();
  };

  const toggleSearchField = () => {
    document.querySelector(".searchbar")?.classList.toggle("show");
  };

  // Mobile: expand/collapse submenu on click
  const onServicesClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      const li = e.currentTarget.parentElement;
      if (!li) return;
      li.classList.toggle("open");
      const submenu = li.querySelector(".submenu");
      if (submenu) {
        submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      }
    }
  };

  // Desktop: open submenu on hover
  const onServicesMouseEnter = (e) => {
    if (!isMobile) {
      const li = e.currentTarget;
      li.classList.add("open");
      const submenu = li.querySelector(".submenu");
      if (submenu) submenu.style.display = "block";
    }
  };

  const onServicesMouseLeave = (e) => {
    if (!isMobile) {
      const li = e.currentTarget;
      li.classList.remove("open");
      const submenu = li.querySelector(".submenu");
      if (submenu) submenu.style.display = "none";
    }
  };

  return (
    <>
      <div className="searchbar">
        <div className="searchbar__wrapper">
          <div className="searchbar__inner">
            <form className="form form-subscribe">
              <div className="input-group">
                <input type="text" className="form-control style1" placeholder="Search now..." />
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

      <header className={`header-section home3 ${scrollPosition > 100 ? "header-fixed fadeInUp" : ""}`}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-start header-start--style2">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/rmk-logo.png" alt="logo" style={{ width: "200px" }} />
                  </Link>
                </div>

                <div className="menu-area">
                  <ul className={`menu menu--style2 ${activeMenu ? "active" : ""}`}>
                    <li>
                      <Link href="/">Home</Link>
                    </li>

                    <li>
                      <Link href="/about">About</Link>
                    </li>

                    {/* SERVICES (renamed from Courses) */}
                    <li
                      className="menu-item-has-children"
                      onMouseEnter={onServicesMouseEnter}
                      onMouseLeave={onServicesMouseLeave}
                    >
                      {/* Desktop: normal link to /services; Mobile: click toggles submenu */}
                      <Link href="/services" onClick={onServicesClick}>
                        Services
                      </Link>

                      <ul className="submenu" style={{ display: "none" }}>
                        <li>
                          <Link href="/services/training-courses">Training Courses</Link>
                        </li>
                        <li>
                          <Link href="/services/consultancy-implementation-audits">
                            Consultancy, Implementation &amp; Audits
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/assessment">Assessment</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-end">
                <div className="menu-area">
                  {/* Optional search/register buttons kept commented to match your layout
                  <div className="header-btn">
                    <Link href="" onClick={toggleSearchField} className="trk-btn trk-btn--search">
                      <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                    </Link>
                    <Link href="/signup" className="trk-btn trk-btn--secondary3">
                      {"Register  "}
                      <span><FontAwesomeIcon icon={faArrowRight} /></span>
                    </Link>
                  </div>
                  */}
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
