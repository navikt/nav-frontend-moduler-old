import * as React from "react";
import { Feilmelding } from "nav-frontend-typografi";
import "nav-frontend-skjema-style";

export interface SkjemaelementFeilmeldingProps
  extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
  /**
   * Komponentens barn
   */
  children?: React.ReactNode;
}

class SkjemaelementFeilmelding extends React.Component<SkjemaelementFeilmeldingProps> {
  static defaultProps: Partial<React.HTMLAttributes<HTMLDivElement>> = {
    "aria-live": "polite",
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <div {...other}>
        {children && (
          <div className="skjemaelement__feilmelding">
            <Feilmelding>{children}</Feilmelding>
          </div>
        )}
      </div>
    );
  }
}

export default SkjemaelementFeilmelding;
