import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Location.scss";
import hotel from "../../../../content/assets/images/camino.png";
import logo from "../../../../content/assets/images/terra2.jpeg";
import logo1 from "../../../../content/assets/images/terra3.jpeg";

const Location = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, subheader1 } = frontmatter;

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

          <div className="terra-location">
            <div align="center">
              <img src={hotel} width="100%" height="40%" alt="" border-radius="100px" />
            </div>
            <div align="center">
              <img src={hotel} width="100%" height="40%" alt="" border-radius="100px" />
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
