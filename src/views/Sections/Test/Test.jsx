import React from "react";
import PropTypes from "prop-types";
import ImageCard from "components/ImageCard";
import PageSection from "components/PageSection";
import clsx from "clsx";
import SectionHeader from "components/SectionHeader";
import { Row, Button } from "react-bootstrap";
import "./Test.scss";
import lugar1 from "../../../../content/assets/images/Test/luga1.jpeg";
import lugar2 from "../../../../content/assets/images/Test/lugar2.jpeg";
import lugar3 from "../../../../content/assets/images/Test/lugar3.jpeg";

const Test = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const slides = document.getElementsByClassName("mySlides");

  /* const slides = {
    display: "none",
  }; */

  let dots;
  let i = 0;
  let a = 0;

  let slideIndex = 1;
  function showSlides(n) {
    dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
      dots[i].className = dots[i].className.replace(" active", "");
      slides[slideIndex - 1].style.display = "block";
      dots[a].className += " active";
    }
    /* slides[slideIndex - 1].style.display = "block"; */
    a = slideIndex - 1;
    /* slides[a].style.display = "block"; 
    dots[a].className += " active"; */
  }

  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const { anchor, header, subheader, imageFileName } = frontmatter;
  return (
    <>
      <div className="outerWrapper">
        <PageSection className={className} id={anchor}>
          {/*  <ImageCard imageFileName={imageFileName} header={header} subheader={subheader} />
        </PageSection>
        <body onLoad="showSlides(); viewSlides();" />
      </div>
  */}

          <div className="slideshow-container" align="center">
            <div className="mySlides">
              <div className="numbertext" />
              <img src={lugar1} width="100%" height="40%" alt="" />
              <p className="legend">Leugar 1 text 1 </p>
              <div className="text" />
            </div>
            <div className="mySlides" align="center">
              <div className="numbertext"> 1/3</div>
              <img src={lugar2} width="80%" alt="" />
              <p className="legend">Leugar 2 text </p>
              <div className="text"> Lugaaar 1 </div>
            </div>
            <div className="mySlides" align="center">
              <div className="numbertext" />
              <img src={lugar3} width="80%" alt="" />
              <p className="legend">Leugar 3 text </p>
              <div className="text" />
            </div>
            <a className="prev" role="button" onClick={() => plusSlides(-1)} tabIndex={0}>
              &#10094;
            </a>
            <a className="next" role="button" onClick={() => plusSlides(1)} tabIndex={0}>
              {/* {" "} */}
              &#10095;{/* {" "} */}
            </a>
          </div>
          <div text-align="center" align="center">
            <span className="dot" role="button" onClick={() => currentSlide(1)} tabIndex={0}>
              &nbsp;
            </span>
            <span className="dot" role="button" onClick="currentSlide(2)" aria-hidden="true">
              &nbsp;
            </span>
            <span className="dot" role="button" onClick="currentSlide(3)" aria-hidden="true">
              &nbsp;
            </span>
          </div>
        </PageSection>
      </div>
    </>
  );
};

Test.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Test.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Test;
