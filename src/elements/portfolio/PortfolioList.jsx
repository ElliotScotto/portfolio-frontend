import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "barTapThumbnail",
    category: "App mobile ",
    description: "Front-end (UI avec React-Native)",
    title: "BarTap",
    details:
      "http://drive.google.com/file/d/1Q_7BYsDTwj7RuobudVVYTH413aP59j-K/view?usp=drive_link",
  },
  {
    image: "marvelThumbnail",
    category: "Site web",
    description: "Projet FullStack avec ReactJS & API Marvel Public",
    title: "Marvel",
    details: "http://elliotscottomarvelapp.netlify.app/",
  },
  {
    image: "happyCowThumbnail",
    category: "App mobile ",
    description: "Projet FullStack React-Native & API OpenFoodFacts",
    title: "Happy Cow",
    details:
      "http://drive.google.com/file/d/1RjdoJOXhNIQmyDA-73YdcGSNLPTAXcey/view?usp=drive_link",
  },
];
// MANAGE STYLE ON _PORTFOLIO.SCSS
class PortfolioList extends Component {
  render() {
    const { column, styeVariation } = this.props; // Note the corrected "styleVariation"
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
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <h5>{value.description}</h5>
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
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default PortfolioList;
