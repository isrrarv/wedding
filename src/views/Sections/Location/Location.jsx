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

import lugar1 from "../../../../content/assets/images/Test/luga1.jpeg";
import lugar2 from "../../../../content/assets/images/Test/lugar2.jpeg";
import lugar3 from "../../../../content/assets/images/Test/lugar3.jpeg";

// Funciones del carrusel

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
        {/* <Row className="justify-content-center ceremony-header">
          <SectionHeader header="Hoteles" subheader="Imagenes" align="center" />
          <div className="hoteles" align="center" />
          </Row> */}
        <SectionHeader header="Hoteles" subheader="Imagenes" />
        <div className="slideshow-container">
          <div className="mySlides" align="center">
            <div className="numbertext"> 1/3</div>
            <img src={lugar1} width="80%" alt="" />
            <p className="legend">Camino Real Sumiya </p>
            <div className="text" />
          </div>
          <div className="mySlides" align="center">
            <div className="numbertext"> 2/3</div>
            <img src={lugar2} width="80%" alt="" />
            <p className="legend">Lugar 2 </p>
            <div className="text" />
          </div>
          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={lugar3} width="80%" alt="" />
            <p className="legend">Lugar 3 </p>
            <div className="text" />
          </div>
          <a className="prev" role="button" onClick={() => plusSlides(-1)} tabIndex={0}>
            &#10094;
          </a>
          <a className="next" role="button" onClick={() => plusSlides(1)} tabIndex={0}>
            &#10095;
          </a>
        </div>
        <div text-align="center" align="center">
          <span className="dot" role="button" onClick={() => currentSlide(1)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(2)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(3)} tabIndex={0}>
            &nbsp;
          </span>
        </div>
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
