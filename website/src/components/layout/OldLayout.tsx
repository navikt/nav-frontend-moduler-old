import React, { useEffect } from "react";
import { default as cl } from "classnames";

import Header from "./header/header";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./sidebar/Sidebar";
import LayoutPicker from "./layoutPicker";
import MdxWrapper from "./Mdxprovider";
import { globalHistory } from "@reach/router";
import "./layout.less";
import startCase from "lodash.startcase";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  useEffect(() => {
    return globalHistory.listen(() => {
      const contentPane = document.getElementsByClassName("mainContent")[0];
      contentPane.scrollTop = 0;
      window.scrollTo(0, 0);
    });
  }, []);

  let source = startCase(props.path.split("/")[1]);
  source = source === "Designsystem" ? "Designsystemet" : source;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <a href="#hovedinnhold" tab-index={-1} id="skip-link">
        Hopp til innhold
      </a>
      <div className="mainWrapper">
        <Header location={props.location} title={source} />
        {props.path.startsWith("/designsystem") && (
          <Breadcrumb location={props.location} />
        )}
        <div className="contentWrapper">
          {props?.pageResources?.page?.path !== "/404.html" && (
            <Sidebar className="leftNavigation" location={props.location} />
          )}
          <main
            id="hovedinnhold"
            className={cl("mainContent", {
              forside: props.location.pathname === "/",
            })}
          >
            <LayoutPicker {...props}>
              <MdxWrapper>{props.children}</MdxWrapper>
            </LayoutPicker>
          </main>
        </div>
      </div>
    </>
  );
};
export default Layout;
