import React from "react";
import { Ingress, Sidetittel } from "nav-frontend-typografi";
import Card from "../../card/Card";
import { Star, Facilitet, HandsHeart, Like, Locked } from "@navikt/ds-icons";
import { NAVLogoDark } from "../../assets/images/svg";
import "./styles.less";
import DeprecationWarning from "../header/DeprecationWarning";
/* import Lenke from "nav-frontend-lenker"; */

const Forside = ({ ...props }) => {
  console.log(props);
  return (
    <>
      <div className="forside__deprecation">
        <DeprecationWarning />
      </div>
      <div className="forside__wrapper">
        <div className="forside__intro">
          <div className="forside__logo-wrapper">
            <NAVLogoDark className="forside__logo" />
            {/* <span className="forside__logo-links">
          <Lenke href="#">Noe info</Lenke>
          <Lenke href="#">Noe annet</Lenke>
        </span>
       */}
          </div>
          <Sidetittel>Verktøykassen</Sidetittel>
          <Ingress>
            En samling ressurser fra ulike fagdisipliner, som sammen hjelper oss
            med å skape bedre, universelt tilgjengelige og sammenhengende
            produkter i NAV.
          </Ingress>
        </div>

        <nav className="card__wrapper" aria-label="Hovedmeny">
          <ol className="card__grid">
            <li>
              <Card
                content="Gjør det enklere å lage produkter i NAV."
                title="Designsystem"
                link="/designsystem"
                icon={
                  <Facilitet
                    focusable="false"
                    className="icon-facilitet--align"
                  />
                }
              />
            </li>
            <li>
              <Card
                content="Metoder og prinsipper for tverrfaglig produktutvikling."
                title="God praksis"
                link="/god-praksis"
                icon={<Like focusable="false" />}
              />
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Forside;
