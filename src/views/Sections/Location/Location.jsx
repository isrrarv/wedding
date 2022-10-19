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
import colibri from "../../../../content/assets/images/Test/villa_1.jpeg";
import lugar3 from "../../../../content/assets/images/Test/misionsol.jpeg";
import lugar4 from "../../../../content/assets/images/Test/hacienda.jpeg";
import phone from "../../../../content/assets/images/about/phone.svg";
import hotel from "../../../../content/assets/images/about/hotel.svg";
import note from "../../../../content/assets/images/about/note.svg";
import location from "../../../../content/assets/images/about/location.svg";
import mg from "../../../../content/assets/images/about/mg.jpeg";
import one from "../../../../content/assets/images/about/one.jpeg";
import anticavilla from "../../../../content/assets/images/about/anticavilla.jpeg";
import mananitas from "../../../../content/assets/images/about/mananitas.jpeg";
import hq from "../../../../content/assets/images/about/hq.jpeg";
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
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.caminoreal.com/en/caminoreal/camino-real-sumiya-cuernavaca?gclid=CjwKCAjwh-CVBhB8EiwAjFEPGbRH76I4eCTVO7sjyJPtROjk0BXK5l7AA7tfTiRIkhyCNyBNT4EJ4hoCpIAQAvD_BwE&gclsrc=aw.ds">
                  Camino Real Sumiya
                </a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;
                <a href="tel:+52 7773299888"> +52 (885) 2265 203</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; &nbsp;Convenio: Por confirmar!
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
            <img src={colibri} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.villascolibri.com.mx/">Villas colibri</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 777321 23 71"> +52 (777) 3122 371</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio: Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://goo.gl/maps/GDtSkgEpx8rBNdJ18">
                  Gral. Diego Díaz González Mtz. 19, Jose G. Parres, 62564 Jiutepec, Mor
                </a>{" "}
              </b>
            </p>
            <div className="text" />
          </div>
          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={lugar3} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.misiondelsol.com/">Misión del Sol</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 7773210999"> +52 (777) 3210 999</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://goo.gl/maps/R9boWSpcZuxB25HU6">
                  Gral. Diego Díaz González Mtz. 31, Jose G. Parres, 62550 Jiutepec, Mor.
                </a>{" "}
              </b>
            </p>
          </div>
          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={lugar4} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.hotelhaciendadecortes.com.mx/">
                  Hotel & Spa Hacienda de Cortés
                </a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 7773158844"> +52 (777) 3158 844</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio: Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/HaciendaDeCortes?share">
                  Plaza Kennedy 90, Atlacomulco, 62560 Jiutepec, Mor.
                </a>{" "}
              </b>
            </p>
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={hq} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://hosterialasquintas.com.mx/">Hosteleria las quintassssss</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 777 318 3949"> +52 (777) 318 3949</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://www.google.com/maps?ll=18.919265,-99.218041&z=13&t=m&hl=es-419&gl=MX&mapclient=embed&cid=2655950728022435030">
                  Blvd. Gustavo Díaz Ordaz 9, Cantarranas, 62448 Cuernavaca, Mor.
                </a>{" "}
              </b>
            </p>
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={one} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.onehoteles.com/">ONE</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 443 310 81 37"> +52 (443) 310 81 37</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://goo.gl/maps/aQxAYUvWC3adrAo18">
                  BCarretera México Acapulco KM 88.6 s/n, Delicias, 62330 Morelos, Cuernavaca,
                  Mexico
                </a>{" "}
              </b>
            </p>
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={mg} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.hotelsone.com/cuernavaca-hotels-mx/">Mision Grand</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 777 133 2855"> +52 777 133 2855</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/HotelMisionGrandCuernavaca?share">
                  C. Galeana 29, Acapantzingo, 62440 Cuernavaca, Mor.
                </a>{" "}
              </b>
            </p>
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={anticavilla} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.villabejar.mx/">Anticavilla Hotel & SPA</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 734 347 0620"> +52 734 347 0620</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/anticavillahoteloficial?share">
                  Río Amacuzac No.10, Vista Hermosa, 62290 Cuernavaca, Mor.
                </a>{" "}
              </b>
            </p>
          </div>

          <div className="mySlides" align="center">
            <div className="numbertext">3/3</div>
            <img src={mananitas} width="80%" alt="" />
            <p className="p3">Reservaciones</p>
            <p className="p5">
              <b>
                <img src={hotel} width="25" height="25" alt="" />
                &nbsp;&nbsp;&nbsp;
                <a href="https://lasmananitas.com.mx">Las Mañanitas</a>
                <br />
                <img src={phone} width="25" height="25" alt="" />
                &nbsp;&nbsp;
                <a href="tel:+52 777 362 0000"> +52 777 362 0000</a>
                <br />
                <img src={note} width="25" height="25" alt="" />
                &nbsp; Convenio:Por confirmar!
                <br />
                <img src={location} width="25" height="25" alt="" />
                <a href="https://g.page/hotellasmananitas?share">
                  Ricardo Linares 107, Cuernavaca Centro, Centro, 62000 Cuernavaca, Mor.
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
          <span className="dot" role="button" onClick={() => currentSlide(4)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(5)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(6)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(7)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(8)} tabIndex={0}>
            &nbsp;
          </span>
          <span className="dot" role="button" onClick={() => currentSlide(9)} tabIndex={0}>
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
