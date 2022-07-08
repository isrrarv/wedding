import React from "react";
import PropTypes from "prop-types";
import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader subheader="Para nosostros es un gran dia, esperamos puedas acompañarnos y ser parte de este gran dia para nosotros. Nos vemos !!" />{" "}
        <SectionHeader header="Dany & Isra" />
      </Row>
      <Row>
        <SectionHeader header="&hearts;" subheader="&hearts;" />{" "}
        {/*  <div className="message" align="center">
          <p className="paragraph3" align="center">
            Esperamos puedas acompañarnos y ser parte de este gran dia para nosotros. Nos vemos !!
          </p>{" "}
         
          <p className="paragraph5" align="center">
            Dany & Isra
          </p>{" "}
          
        </div>{" "}
        */}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
