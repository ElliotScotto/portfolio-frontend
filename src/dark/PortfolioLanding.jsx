import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];
const PortfolioLanding = () => {
  return (
    <div className="active-dark">
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title">
                        Je m'appelle <br />
                        Elliot Scotto <br />
                        <TextLoop>
                          <span> Developpeur</span>
                          <span> FullStack</span>
                          <span> Freelance</span>
                          <span> Javascript</span>
                        </TextLoop>{" "}
                      </h1>
                      <h3>Rosny-sur-Seine (78)</h3>
                      <h3>France</h3>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about_es.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">A propos de Moi</h2>
                      <p className="description">
                        "Après 7 belles années de réussite comme responsable
                        dans une grande enseigne de bricolage, j'ai pris
                        conscience que je pouvais donner un autre sens à ma
                        carrière.
                        <br /> Si mon appétence pour le développement a commencé
                        il y a longtemps, la pandémie de Covid et le confinement
                        m'ont donné simplement le "push" psychologique que
                        j'attendais.
                        <br />
                        Aujourd'hui, c'est un vrai nouveau départ initié avec le
                        Bootcamp du
                        <a
                          href="https://www.lereacteur.io/"
                          style={{ color: "rgb(198, 201, 216)" }}
                        >
                          {" "}
                          Réacteur{" "}
                        </a>
                        (Paris) que j'ai pu me former aux technologies web et
                        mobiles pour répondre aux besoins des particuliers et
                        des entreprises."
                      </p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Ce que je propose*</h2>
                  <p>*Sur la base d'un devis avec échéancier (gratuit).</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="projets" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">Mes Derniers Projets</h2>
                    <p>
                      Accédez à mon activité et mon code sur{" "}
                      <a href="http://github.com/ElliotScotto?tab=repositories">
                        GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}
      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/about/about-9.jpg"
            contactTitle="Hire Me."
          />
        </div>
      </div>
      {/* End Contact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
