import React, { Component } from "react";
import {
  FiMonitor,
  FiSmartphone,
  FiScissors,
  FiSettings,
  FiSmile,
  FiShoppingCart,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Site Internet",
    description: `Je conçois un site internet responsive complet dédié à votre activité.`,
  },
  {
    icon: <FiSmartphone />,
    title: "Application Mobile",
    description:
      "J'intègre les fonctionnalités nécessaires à votre activité compatibles avec iOS et Android.",
  },
  {
    icon: <FiScissors />,
    title: "Sur mesure",
    description:
      "Selon la complexité du projet, j'intègre une base de données et crée les API nécessaires.",
  },
  {
    icon: <FiSettings />,
    title: "Garantie & Maintenance",
  },
  {
    icon: <FiSmile />,
    title: "Echange & Transparence",
  },
  {
    icon: <FiShoppingCart />,
    title: "Prix",
    description: `Ma tarification moyenne journalière est de 250€/jour.`,
  },
];
class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <div className="service service__style--2">
                <div className="icon">{val.icon}</div>
                <div className="content">
                  <h3 className="title">{val.title}</h3>
                  <p>
                    {val.title === "Garantie & Maintenance" ? (
                      <>
                        Je m'engage à vous fournir un code fonctionnel et testé.{" "}
                        <br />
                        Selon votre souhait, je prend en considération les
                        éventuels changements désirés pendant le projet.
                        <br />
                        Je propose une assistance après le rendu du projet si
                        besoin.
                      </>
                    ) : val.title === "Echange & Transparence" ? (
                      <>
                        {val.title === "Echange & Transparence" && (
                          <>
                            Regardez l'avancée de votre projet en cours via un
                            tableau de bord (Jira - Agile)
                          </>
                        )}
                      </>
                    ) : (
                      val.description
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
