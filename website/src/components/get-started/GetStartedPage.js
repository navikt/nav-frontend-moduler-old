import React from "react";
import { Link } from "gatsby";

import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Systemtittel, Normaltekst } from "nav-frontend-typografi";

import "./styles.less";

const GetStartedPage = ({ ...props }) => (
  <div>
    <Normaltekst style={{ maxWidth: 600 }}>
      Alle nav-frontend komponenter dokumentert her blir ikke lengre forvaltet.
      Vi anbefaler alle å ta i bruk de nye pakkene våre nevnt under for nye
      prosjekter.
    </Normaltekst>
    <div className="grid">
      <LenkepanelBase
        linkCreator={(props) => (
          <Link className="lenkepanel lenkepanel--border" to={props.href}>
            {props.children}
          </Link>
        )}
        href="https://aksel.nav.no/designsystem"
        border
      >
        <div>
          <Systemtittel>På jakt etter de nye løsningene våre?</Systemtittel>
          <p>
            Alle våre nye løsningene finnes nå dokumentert på
            aksel.nav.no/designsystem
          </p>
        </div>
      </LenkepanelBase>
      <LenkepanelBase
        linkCreator={(props) => (
          <Link className="lenkepanel lenkepanel--border" to={props.href}>
            {props.children}
          </Link>
        )}
        href="/designsystem/components"
        border
      >
        <div>
          <Systemtittel>nav-frontend komponenter</Systemtittel>
          <p>
            Se forhåndsvisninger og kode-eksempler for de eldre komponentene
            våre komponenter.
          </p>
        </div>
      </LenkepanelBase>
    </div>
  </div>
);

export default GetStartedPage;
