import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Youtube from "content/assets/images/portfolio/Youtube.png";
import YoutubeHover from "content/assets/images/portfolio/YoutubeHover.png";
import "./Location.scss";
import ImageCard from "components/ImageCard";
import hotel from "../../../../content/assets/images/camino.png";
import logo from "../../../../content/assets/images/terra2.jpeg";
import logo1 from "../../../../content/assets/images/terra3.jpeg";

const Location = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, subheader1 } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
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
        <div className="countdownIntro">The ceremony is now live!</div>
        <div className="joinButtonWrapper">
          <div>
            <a href="https://youtu.be/EXOL-3JyXMI" target="_blank" rel="noreferrer">
              <Button size="xl" variant="primary" className="text-uppercase main-button join-now">
                <p className="buttonTitle">Join Now!</p>
              </Button>{" "}
              <br />
            </a>
          </div>
        </div>{" "}
        {/* joinButtonWrapper */}
        <div className="vendors">
          <p>
            Hosted at
            <a
              href="https://www.strathmore.org/mansion"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              the Mansion at Strathmore
            </a>
          </p>
          <p>
            Officiated by
            <a
              href="https://elleweds.wixsite.com/elleweds"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Erren Lee
            </a>
          </p>
          <p>
            Music provided by
            <a
              href="http://cellobosco.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Carol Anne Bosco
            </a>
          </p>
          <p>
            Stay tuned for photos by
            <a
              href="https://anaisabelphotography.com/"
              className="countdownLinks"
              target="_blank"
              rel="noreferrer"
            >
              Ana Isabel
            </a>
            !
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
            <div className="countdownIntro">The ceremony will begin in</div>
            <div className="countdownWrapper">
              <div className="countdownSection">
                <div className="countWrapper">
                  <div className="count">{days}</div>
                  <div className="unit">days</div>
                </div>
                <div className="countWrapper">
                  <div className="count">{hours}</div>
                  <div className="unit">hours</div>
                </div>
              </div>
              <div className="countdownSection">
                <div className="countWrapper">
                  <div className="count">{minutes}</div>
                  <div className="unit">minutes</div>
                </div>
                <div className="countWrapper">
                  <div className="count">{seconds}</div>
                  <div className="unit">seconds</div>
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
                    <p className="buttonTitle">Join Now!</p>
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
          <div className="countdownIntro">The ceremony will begin in</div> {/* countdownIntro */}
          <div className="countdownWrapper">
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{days}</div> {/* count */}
                <div className="unit">days</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{hours}</div> {/* count */}
                <div className="unit">hours</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
            <div className="countdownSection">
              <div className="countWrapper">
                <div className="count">{minutes}</div> {/* count */}
                <div className="unit">minutes</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
              <div className="countWrapper">
                <div className="count">{seconds}</div> {/* count */}
                <div className="unit">seconds</div> {/* unit */}
              </div>{" "}
              {/* countWrapper */}
            </div>{" "}
            {/* countdownSection */}
          </div>{" "}
          {/* countdownWrapper */}
          <div className="instaWrapper">
            <p className="checkOut">
              Check out
              <a
                href="https://www.instagram.com/princess_tanuki/"
                className="spacedCountdownLinks"
                target="_blank"
                rel="noreferrer"
              >
                Tanuki&apos;s Instagram
              </a>
              while you wait!
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
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header={header} subheader={subheader} />

          <a href="https://goo.gl/maps/eVu57T5dnRSEzXEa7">
            Mártires de La Revolución 20 Bis, Col. Parres, 62543 Jiutepec, Mor
          </a>
        </Row>
        <div className="terra-location">
          <div align="center">
            <img src={logo} width="100%" height="40%" alt="" border-radius="100px" />
          </div>
          <div align="center">
            <img src={logo1} width="100%" height="40%" alt="" border-radius="100px" />
          </div>
        </div>
        <br />
        <div className="countdownAndVideoDiv" align="center">
          <iframe
            title="map"
            id="mapa-terra"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4489.1361621686465!2d-99.19507361699534!3d18.891569396506192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddfc402d6be03%3A0xa51d5d87bebad9ef!2sTerra%20%26%20Malva!5e0!3m2!1ses!2smx!4v1654667949992!5m2!1ses!2smx"
            width="560%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>{" "}
        <br />
        <Row className="justify-content-center ceremony-header">
          <SectionHeader header="Hoteles" subheader="Imagenes" />
          <div className="hoteles">
            <div>
              <img src={hotel} width="100%" alt="" />
              <br />
              <a href="tel: 55555">Tel. 55555</a>
            </div>
          </div>
        </Row>
        {/* countdownAndVideoDiv */}
      </PageSection>
    </div>
  );
};

Location.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Location.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Location;
