import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MOBILE_MAX = 991;

const Header = () => {
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

  function removeActive() {
    const element = document.getElementById("menu");
    if (element) element.classList.remove("active");
    const icon = document.getElementById("icon");
    if (icon) icon.classList.remove("active");
  }

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
  }, [handleScroll, mqCheck, router.events]);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
    closeAllMenus();
  };

  // Mobile: expand/collapse submenu
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

  // Desktop: hover behavior
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
    <header className={`header-section brand-1 ${scrollPosition > 100 ? "header-fixed fadeInUp" : ""}`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-start header-start--style1">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo/rmk-logo.png" alt="logo" style={{ width: "200px" }} />
                </Link>
              </div>
              <div className="menu-area">
                <ul className={activeMenu ? "menu menu--style1 active" : "menu menu--style1"}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  {/* SERVICES dropdown */}
                  <li
                    className="menu-item-has-children"
                    onMouseEnter={onServicesMouseEnter}
                    onMouseLeave={onServicesMouseLeave}
                  >
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
                <div
                  className={activeMenu ? "header-bar d-xl-none active" : "header-bar d-xl-none"}
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
  );
};

export default Header;
