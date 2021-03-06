import classnames from "classnames";
import { Link } from "gatsby";
import { Xknapp } from "nav-frontend-ikonknapper";
import { Undertittel, Systemtittel } from "nav-frontend-typografi";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useKeypress from "react-use-keypress";
import { useMainMenu } from "../../../../useSiteStructure";
import { GithubLogo } from "../../../assets/images/svg";
import "./styles.less";

const cls = (props, hidden) =>
  classnames("mobile-nav", {
    "mobile-nav--open": props.open,
    "mobile-nav--hidden": hidden,
  });

const MobileNav = ({ menu, location, ...props }) => {
  const [hidden, setHidden] = useState(true);
  const lukkBtn = useRef();
  const bg = useRef();
  const timer = useRef();

  // Timer is needed here to wait for transition animation to finish
  useEffect(() => {
    if (props.open) {
      clearTimeout(timer.current);
      timer.current = null;
      setHidden(false);

      ReactDOM.findDOMNode(lukkBtn.current).focus();
    } else {
      timer.current = setTimeout(() => {
        setHidden(true);
      }, 200);
    }
  }, [props.open]);

  useKeypress("Escape", () => {
    props.open && props.toggle();
  });

  const handleClick = (e) => {
    if (!hidden && e.target !== bg.current) {
      props.toggle();
    }
  };

  const isDs = location.pathname.indexOf("/designsystem") !== -1;
  const newMenu = useMainMenu(location);
  // TODO: Reimplement mobile menu
  const pickedMenu = isDs ? menu : newMenu;

  const title = isDs ? "Designsystemet" : "God praksis";

  return (
    <div
      className={cls(props, hidden)}
      aria-hidden={hidden}
      onClick={(e) => handleClick(e)}
    >
      <nav
        className="mobile-nav__drawer"
        aria-label="Hovedmeny mobil"
        ref={(node) => {
          bg.current = node;
        }}
      >
        <Xknapp
          tabIndex={hidden ? -1 : 0}
          className="mobile-nav__close-btn"
          onClick={props.toggle}
          ref={(node) => {
            lukkBtn.current = node;
          }}
        >
          <span className="sr-only">Lukk meny</span>
        </Xknapp>
        <ul className="nav-list">
          <Systemtittel
            className="mobile__subtitle"
            tag="div"
            style={{ marginTop: "1rem" }}
          >
            {title}
          </Systemtittel>
          {pickedMenu.map((route) => {
            return (
              <div key={route.link}>
                {route?.heading && (
                  <Undertittel
                    className="mobile__subtitle"
                    tag="div"
                    style={{ marginTop: "1rem" }}
                  >
                    {route?.heading}
                  </Undertittel>
                )}
                <li>
                  <Link
                    tabIndex={hidden ? -1 : 0}
                    activeClassName="active"
                    to={
                      route.link ? route.link.replace("/alertstripe", "") : "/"
                    }
                  >
                    {route.title}
                  </Link>
                </li>
              </div>
            );
          })}
          <li>
            {isDs ? (
              <a
                tabIndex={hidden ? -1 : 0}
                href="https://github.com/navikt/nav-frontend-moduler"
                className="github"
              >
                <GithubLogo />
                Github
              </a>
            ) : (
              <a
                tabIndex={hidden ? -1 : 0}
                href="https://github.com/navikt/verktoykasse-innhold"
                className="github"
              >
                <GithubLogo />
                Rediger innhold (krever innlogging)
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
