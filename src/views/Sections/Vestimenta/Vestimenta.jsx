import React from "react";
import PropTypes from "prop-types";

import Notifications, { notify } from "react-notify-toast";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Vestimenta.scss";
import colors from "../../../../content/assets/images/color.png";
import no from "../../../../content/assets/images/forbidden.svg";

import men1 from "../../../../content/assets/images/men.png";

const Vestimenta = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, teamMember } = frontmatter;

  return (
    <div>
      <PageSection className={className} id={anchor}>
        <Notifications options={{ zIndex: 200, top: "50px" }} />
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row className="charities">
          <Col lg={5} className="mx-auto text-center">
            <div className="terra-location">
              <div align="center">
                <p className="large text-muted">
                  <SectionHeader header="Mujeres" />
                </p>
                <p className="large text-muted">
                  Vestido largo
                  <br />
                  <img src={no} width="10%" alt="" border-radius="100px" />
                  <img src={colors} width="30%" alt="" border-radius="100px" />
                  &nbsp;
                </p>

                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
              <div align="center">
                <p className="large text-muted">
                  <SectionHeader header="Hombres" />
                </p>
                <p className="large text-muted">
                  Traje formal
                  <br /> No guayaberas
                </p>

                {/* <img src={men1} width="100%" height="40%" alt="" border-radius="100px" />
                 */}
              </div>
            </div>
            <p className="large text-muted">
              🚫 Tenis <br />
            </p>
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

Vestimenta.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Vestimenta.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Vestimenta;
