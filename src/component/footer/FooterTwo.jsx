import React from "react";
import { FaLinkedinIn, FaGithub, FaSlack } from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "http://www.linkedin.com/in/elliotscotto/",
  },
  {
    Social: <FaGithub />,
    link: "http://github.com/ElliotScotto?tab=repositories",
  },
  {
    Social: <FaSlack />,
    link: "https://slack.com/get-started#/createnew",
  },
];

const FooterTwo = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20 text">
                <p>
                  Fabriqué en août 2023 - ElliotScottoEI - SIRET : 750897 18
                  00022
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
