import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import ImageCard from "components/ImageCard";
import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/portfolio/Youtube.png";
import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, imageFileName } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" }; // color de mensaje despues de hastag
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
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
        {/* joinButtonWrapper */}
        <div className="vendors">
          <p>
            <i>
              <b>Hosted at </b>
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
              <b>Officiated by</b>
            </i>
            <a
              href="https://elleweds.wixsite.com/elleweds"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Erren Lee</b>
              </i>
            </a>
          </p>
          <p>
            <i>
              <b>Music provided by</b>
            </i>
            <a
              href="http://cellobosco.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Carol Anne Bosco</b>
              </i>
            </a>
          </p>
          <p>
            <i>
              <b>Stay tuned for photos by</b>
            </i>
            <a
              href="https://anaisabelphotography.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <b>Ana Isabel</b>
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
    if (
      (days === 0 && hours === 0 && minutes === 15 && seconds === 0) ||
      (days === 0 && hours === 0 && minutes < 15)
    ) {
      return (
        <div>
          <div className="countdownAndMusic">
            <div className="countdownIntro">La celebracion será en: </div>
            <div className="countdownWrapper">
              <div className="countdownSection">
                <div className="countWrapper">
                  <div className="count">{days}</div>
                  <div className="unit">dias</div>
                </div>
                <div className="countWrapper">
                  <div className="count">{hours}</div>
                  <div className="unit">horas</div>
                </div>
              </div>
              <div className="countdownSection">
                <div className="countWrapper">
                  <div className="count">{minutes}</div>
                  <div className="unit">minutos</div>
                </div>
                <div className="countWrapper">
                  <div className="count">{seconds}</div>
                  <div className="unit">segundos</div>
                </div>
              </div>
            </div>
            <div className="joinButtonWrapper">
              <div>
                <a href="https://youtu.be/EXOL-3JyXMI" target="_blank" rel="noreferrer">
                  <Button
                    size="xl"
                    variant="primary"
                    className="text-uppercase main-button join-now"
                  >
                    <p className="buttonTitle">Acompañanos!!</p>{" "}
                  </Button>{" "}
                  <br />
                </a>
              </div>
            </div>
            <div className="vendors">
              <p>
                Pre-ceremony music provided by
                <a
                  href="http://cellobosco.com/"
                  className="countdownLinks"
                  target="_blank"
                  rel="noreferrer"
                >
                  Carol Anne Bosco
                </a>
              </p>
            </div>
          </div>
        </div>
      );
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
              Mientras esperas puedes adoptar un perrito en
              <a
                href="https://www.instagram.com/alberguecano/"
                className="spacedCountdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                alberguecano (Instagram)
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
            <Countdown date="2022-06-30T12:00:00-05:00" renderer={renderer} />
          </Row>

          {/* <a
              href="https://www.youtube.com/watch?v=EXOL-3JyXMI&feature=emb_err_woyt"
              target="_blank"
              rel="noreferrer"
              className="youtubeLink"
            >
              <div className="container">
                <img src={Youtube} alt="youtubeLink" className="image" width="560" height="auto" />
                <div className="middle">
                  <img
                    src={YoutubeHover}
                    alt="youtubeLink"
                    className="imageHover"
                    width="560"
                    height="auto"
                  />
                </div>{" "}
                {/* middle }
              </div>{" "}
              {/* container }
  </a>  */}
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
