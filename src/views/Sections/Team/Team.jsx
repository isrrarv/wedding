import React from "react";
import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";
import logo from "../../../../content/assets/images/terra2.jpeg";
import logo1 from "../../../../content/assets/images/terra3.jpeg";
import dresscode from "../../../../content/assets/images/dresscode.png";
import men1 from "../../../../content/assets/images/men.png";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  const copiedToClipboard = () => {
    const alertColor = { background: "#9ebc9f", text: "white" };
    notify.show(
      "Hashtag copied to clipboard. Take a selfie and tag us on social media!",
      "custom",
      5000,
      alertColor,
    );
  };

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={8} className="mx-auto text-center">
            <div className="terra-location">
              <div align="center">
                <p className="large text-muted">
                  <SectionHeader header="Mujeres" />
                </p>
                <p className="large text-muted">Vestido largo</p>

                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
              <div align="center">
                <p className="large text-muted">
                  <SectionHeader header="Hombres" />
                </p>
                <p className="large text-muted">Traje formal</p>

                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
            </div>
            <p className="large text-muted">No tenis</p>
          </Col>
          <Col lg={8} className="mx-auto text-center">
            <img
              src={men1}
              width="auto"
              height="auto"
              alt=""
              border-radius="100px"
              align="center"
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        {/* <Row>
          {teamMember.map(({ header, ...tmProps }) => (
            <Col sm={4} key={header}>
              <TeamMember header={header} {...tmProps} />
            </Col>
          ))}
        </Row>
          */}
      </PageSection>
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
