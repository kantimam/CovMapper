import React from "react";
import Typography from "@material-ui/core/Typography";

export const Imprint = () => {
  return (
    <>
      <main className="sections">
        <section>
          <Typography variant="h1">Impressum</Typography>
        </section>
        <section>
          <Typography variant="h2">Die CovMap App ist ein Forschungsprojekt von Mitarbeiten der Charité, NETCHECK und dem Hasso Plattner Institut.</Typography>
          <Typography variant="body1">Falls Du Fragen hast, wende Dich an:</Typography>
          <Typography variant="body1">CovMap Team<br>Augustenburger Platz 1<br>13353 Berlin<br>Telefon: 030/450627346<br>Email: covmap@charite.de</Typography>
        </section>
      </main>
    </>
  );
};