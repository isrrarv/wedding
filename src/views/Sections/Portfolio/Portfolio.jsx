import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import instagram from "../../../../content/assets/images/Test/instagram.svg";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, imageFileName } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" }; // color de mensaje despues de hastag
    notify.show(
      "Hashtag copiado en el portapapeles. Tómate un selfie y etiquétanos en las redes sociales!",
      "custom",
      5000,
      alertColor,
    );
  };

  const Completionist = () => {
    return (
      <span className="finishedCountdown">
        <div className="countdownIntro">
          <b>Bienvenidos!</b>
        </div>
        <div className="instaWrapper">
          <p className="checkOut">
            Usa nuestro filtro y etiquetanos con nuestro hashtag
            <a
              href="https://www.instagram.com/ar/941363443710346/"
              className="spacedCountdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>
                  click aqui <img src={instagram} width="25" height="25" alt="" />
                </b>
              </i>
            </a>
          </p>
        </div>{" "}
        {/* joinButtonWrapper */}
        <div className="vendors">
          <p>
            <i>
              <b> Venue: </b>
            </i>
            <a
              href="https://www.instagram.com/terraymalva/?hl=es"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Terra & Malva</b>
              </i>
            </a>
          </p>

          <p>
            <i>
              <b>Musica por:</b>
            </i>
            <a
              href="https://www.bodas.com.mx/musica-para-bodas/live-djs--e117153"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Live Djs</b>
              </i>
            </a>
          </p>
          <p>
            <i>
              <b>No te pierdas las fotos de</b>
            </i>
            <a
              href="https://instagram.com/claudio.piedrola?igshid=YmMyMTA2M2Y="
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Claudio Piedrola</b>
              </i>
            </a>
          </p>
        </div>{" "}
        {/* vendors */}
      </span> // finishedCountdown
    );
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }

    // Render a countdown

    return (
      <span>
        <div className="countdownAndTanuki">
          <div className="countdownIntro">La celebracion será en:</div> {/* countdownIntro */}
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{days}</div> {/* count */}
                <div className="unit">dias</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{hours}</div> {/* count */}
                <div className="unit">horas</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{minutes}</div> {/* count */}
                <div className="unit">minutos</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{seconds}</div> {/* count */}
                <div className="unit">segundos</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
          </div>{" "}
          {/* countdownWrapper */}
          <div className="instaWrapper">
            <p className="checkOut">
              PUEDES USAR NUESTRO FILTRO Y HASHTAG
              <a
                href="https://www.instagram.com/ar/941363443710346/"
                className="spacedCountdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <b>
                    click aqui <img src={instagram} width="25" height="25" alt="" />
                  </b>
                </i>
              </a>
            </p>
          </div>{" "}
          {/* instaWrapper */}
        </div>{" "}
        {/* countdownAndTanuki */}
      </span>
    );
  };

  return (
    <div className="outerWrapper">
      <PageSection className={clsx("portfolio-section", className)} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader} />
          <CopyToClipboard text="#DanyAndIsra2023">
            <button
              onClick={copiedToClipboard}
              id="copy-to-clipboard"
              variant="primary"
              type="button"
              size="xl"
              className="hashtag"
            >
              #DanyIsra2023
            </button>
          </CopyToClipboard>
        </Row>
        <div className="countdownAndVideoDiv">
          <Row>
            <Countdown date="2023-02-18T16:00:00-05:00" renderer={renderer} />
          </Row>
        </div>{" "}
        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
