import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Button } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Location.scss";
import hotel1 from "../../../../content/assets/images/camino.jpeg";
import logo from "../../../../content/assets/images/terra2.jpeg";
import logo1 from "../../../../content/assets/images/terra3.jpeg";

import lugar1 from "../../../../content/assets/images/Test/luga1.jpeg";
import lugar2 from "../../../../content/assets/images/Test/lugar2.jpeg";
import lugar3 from "../../../../content/assets/images/Test/lugar3.jpeg";
import tel from "../../../../content/assets/images/about/phone-call-thin.svg";
import phone from "../../../../content/assets/images/about/phone.svg";
import hotel from "../../../../content/assets/images/about/hotel.svg";
import note from "../../../../content/assets/images/about/note.svg";
import location from "../../../../content/assets/images/about/location.svg";
// Funciones del carrusel

let i = 0;
let a = 0;

let slideIndex = 0;
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("mySlides");

function showSlides(n) {
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
    a = slideIndex - 1;
    dots[a].className += " active";
  }
  /* slides[slideIndex - 1].style.display = "block"; */

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

parent.addEventListener(
  "mousewheel",
  function () {
    currentSlide(1);
  },
  { once: true },
);

parent.addEventListener(
  "touchmove",
  function () {
    currentSlide(1);
  },
  { once: true },
);

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
        <SectionHeader header="Hospedaje" /* subheader="Imagenes" */ />
        <div className="slideshow-container">
          <div className="mySlides" align="center">
            <div className="numbertext"> 1/3</div>
            <img src={hotel1} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p4">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.caminoreal.com/en/caminoreal/camino-real-sumiya-cuernavaca?gclid=CjwKCAjwh-CVBhB8EiwAjFEPGbRH76I4eCTVO7sjyJPtROjk0BXK5l7AA7tfTiRIkhyCNyBNT4EJ4hoCpIAQAvD_BwE&gclsrc=aw.ds">
                  Camino Real Sumiya
                </a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 7773299888"> +52 (885) 2265 203</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:123456789
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/Camino-Real-Sumiya-Cuernavaca?share">
                  Calle Antiguo Camino a Jiutepec S/N, Jose G. Parres, 62564 Jiutepec, Mor
                </a>{" "}
                <br />
              </b>
            </p>

            <div className="text" />
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext"> 2/3</div>
            <img src={lugar2} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p4">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.caminoreal.com/en/caminoreal/camino-real-sumiya-cuernavaca?gclid=CjwKCAjwh-CVBhB8EiwAjFEPGbRH76I4eCTVO7sjyJPtROjk0BXK5l7AA7tfTiRIkhyCNyBNT4EJ4hoCpIAQAvD_BwE&gclsrc=aw.ds">
                  Lugar 2 de morelos
                </a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 7773299888"> +52 (885) 2265 203</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:123456789
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/Camino-Real-Sumiya-Cuernavaca?share">
                  Calle Antiguo Camino a Jiutepec S/N, Jose G. Parres, 62564 Jiutepec, Mor
                </a>{" "}
              </b>
            </p>
            <div className="text" />
          </div>
          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={lugar3} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p4">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.caminoreal.com/en/caminoreal/camino-real-sumiya-cuernavaca?gclid=CjwKCAjwh-CVBhB8EiwAjFEPGbRH76I4eCTVO7sjyJPtROjk0BXK5l7AA7tfTiRIkhyCNyBNT4EJ4hoCpIAQAvD_BwE&gclsrc=aw.ds">
                  Lugar 3 de morelos
                </a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 7773299888"> +52 (885) 2265 203</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:123456789
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/Camino-Real-Sumiya-Cuernavaca?share">
                  Calle Antiguo Camino a Jiutepec S/N, Jose G. Parres, 62564 Jiutepec, Mor
                </a>{" "}
              </b>
            </p>
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
