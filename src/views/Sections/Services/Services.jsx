import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Services.scss";

const Services = ({ className, frontmatter }) => {
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
          <p className="paragraph1">....</p> {/* paragraph1 */}
          <p className="paragraph2">....</p> {/* paragraph2 */}
          <p className="paragraph3">
            We hope you can join us, down the road when we have a belated reception to celebrate
            with you all. We&apos;ll look forward to seeing you!
          </p>{" "}
          {/* paragraph3 */}
          <p className="paragraph4">Sending our love,</p> {/* paragraph4 */}
          <p className="paragraph5">Dany & Isra</p> {/* paragraph5 */}
        </div>{" "}
        {/* message */}
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
