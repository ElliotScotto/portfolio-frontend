import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "barTapThumbnail",
    category: "App mobile",
    description: "Front-end [React-Native]",
    title: "BarTap",
    details:
      "https://drive.google.com/file/d/1Q_7BYsDTwj7RuobudVVYTH413aP59j-K/view?usp=sharing",
    explications: `Les clients disposant du NFC accèdent aux informations et gagnent des récompenses provenant de partenaires : bars, restaurants...`,
    role: "Mon Rôle : Création MVP : comptes-utilisateur, événements NFC, push-notifications, tutoriel, animations, traitement des données...",
  },
  {
    image: "marvelThumbnail",
    category: "Site web",
    description: "FullStack [ReactJS & Express]",
    title: "Marvel",
    details: "http://elliotscottomarvelapp.netlify.app/",
    explications: "Clône du site web Marvel",
    role: "Mon Rôle : Création/Connexion de compte utilisateur, Traitement et affichage des données de l'API Marvel, création d'un serveur Express avec APIs et BDD MongoDB...",
  },
  {
    image: "happyCowThumbnail",
    category: "App mobile",
    description: "[React-Native]",
    title: "Happy Cow",
    details:
      "https://drive.google.com/file/d/1RjdoJOXhNIQmyDA-73YdcGSNLPTAXcey/view?usp=sharing",
    explications:
      "Clône de l'appli mobile Happy Cow répertoriant des établissements de restauration",
    role: "Mon Rôle : Création de l'appli grâce à l'API OpenFoodFacts, geolocalisation des établissements répertoriés, compte-utilisateur, mise en favoris...",
  },
];
// MANAGE STYLE ON _PORTFOLIO.SCSS
class PortfolioList extends Component {
  render() {
    const { column, styeVariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);

    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styeVariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <h4>
                    <a>{value.title}</a>
                    <p>{value.category}</p>
                  </h4>
                  <div className="allDetails">
                    <h5>{value.description}</h5>
                    <p>{value.explications}</p>
                    <h6>{value.role}</h6>
                  </div>
                  {!value.details ? null : (
                    <div className="portfolio-button">
                      <a className="rn-btn" href={value.details}>
                        Découvrir
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <Link className="link-overlay" to="/portfolio-details"></Link>
            </div>
            <br />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default PortfolioList;
