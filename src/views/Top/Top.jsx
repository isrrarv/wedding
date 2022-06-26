import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import Countdown from "react-countdown";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, imageFileName, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  const renderer = ({ days }) => {
    if (days <= 0) {
      // Render a completed state
      return (
        <Button
          size="xl"
          variant="primary"
          className="text-uppercase main-button"
          onClick={scrollToSection}
        >
          <p className="buttonTitle">Ve la ceremonia en:</p>
        </Button>
      );
    }
    return (
      <Popup
        modal
        trigger={
          <Button
            size="xl"
            variant="primary"
            className="text-uppercase main-button"
            onClick={scrollToSection}
          >
            <p className="buttonTitle">Reserva el dia !!</p>
          </Button>
        }
      >
        {(close) => (
          <div className="addToCalModal">
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
            <div className="calendarHeader text-uppercase"> Recerva el dia !!</div>
            <div className="calendarContent">
              <div className="calendarLinksWrapper">
                <div>
                  <FontAwesomeIcon icon={["fab", "google"]} className="calIcon" />
                  <a
                    href="webcal://p43-caldav.icloud.com/published/2/Mjc2ODU1MTQyMjc2ODU1MUo9-nFCtzkjGTFWF86Lsvob8ew2r9T6OUx2WY8DnlgoUgK7mrpLF8woaQtcbFfIgR5YLeVQL_hjpxT_UvnTwZQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apple
                  </a>
                </div>
                <div>
                  <a
                    href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MmZpbTBwMjRhbjRmaTM5dG91YTUyNGpkMGEgaXNycmFwa3J2QG0&tmsrc=isrrapkrv%40gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google
                  </a>
                </div>
                <div>
                  <a
                    href="https://outlook.live.com/calendar/0/deeplink/read/AQMkADAwATZiZmYAZC04ZDYyLTg3M2UtMDACLTAwCgBGAAADTPXZ%2B7fjIEWNLZkIPzZ%2FZQcAGQsqnxuOq0%2BIc8wBN4z6%2BwAAAgENAAAAGQsqnxuOq0%2BIc8wBN4z6%2BwAFU6VB6gAAAA%3D%3D?popoutv2=1&version=20220603005.10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Outlook
                  </a>
                </div>

                <div>
                  <a
                    href="https://calendar.yahoo.com/jvmbxd5cuzrzbt5zt5rhmmz2mhfnyzo6nn3g2sjp/2f5eeb742ea0d63c0dc8718f3941c656?od=258"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yahoo
                  </a>
                </div>
              </div>{" "}
              {/* calendarLinksWrapper */}
            </div>{" "}
            {/* calendarContent */}
          </div> // addToCalModal
        )}
      </Popup>
    );
  };

  const extraInfoPart = <Countdown date="2023-02-18T16:00:00-05:00" renderer={renderer} />;

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
