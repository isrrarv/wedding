import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Hoteles.scss";

const Hoteles = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <div className="message">
          {/* paragraph3 */}
          <p className="paragraph4">Sending our love,</p> {/* paragraph4 */}
          <p className="paragraph5">Dany & Isra</p> {/* paragraph5 */}
        </div>{" "}
        {/* message */}
      </Row>
    </PageSection>
  );
};

Hoteles.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Hoteles.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Hoteles;
