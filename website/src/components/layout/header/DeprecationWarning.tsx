import AlertStripe from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import React from "react";

const DeprecationWarning = () => {
  return (
    <AlertStripe type="advarsel" className="hellobanner">
      Dette er en utdatert side,{" "}
      <Lenke href="https://design.nav.no/">
        gå her for å finne oppdatert dokumentasjon.
      </Lenke>
    </AlertStripe>
  );
};

export default DeprecationWarning;
