import { Facilitet } from "@navikt/ds-icons";
import Lenke from "nav-frontend-lenker";
import { Ingress, Sidetittel } from "nav-frontend-typografi";
import React from "react";
import { NAVLogoDark } from "../../assets/images/svg";
import Card from "../../card/Card";
import DeprecationWarning from "../header/DeprecationWarning";
import "./styles.less";

const Forside = ({ ...props }) => {
  return (
    <>
      <div className="forside__deprecation">
        <DeprecationWarning />
      </div>
      <div className="forside__wrapper">
        <div className="forside__intro">
          <div className="forside__logo-wrapper">
            <NAVLogoDark className="forside__logo" />
          </div>
          <Sidetittel>
            Gammel dokumentasjonside for designsystemet til NAV
          </Sidetittel>
          <Ingress>
            Gå til <Lenke href="https://aksel.nav.no/">aksel.nav.no</Lenke> for
            oppdatert dokumentasjon.
          </Ingress>
        </div>

        <nav className="card__wrapper" aria-label="Hovedmeny">
          <ol className="card__grid">
            <li>
              <Card
                content="Dokumentasjon for nav-frontend pakker"
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
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Forside;
