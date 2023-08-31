import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Capacités",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          - Travail en projet collaboratif (AGILE kanban){" "}
                          <span> - Jira</span>
                          <br />
                          Communication, Suivi et maintenance du code
                        </li>
                        <li>
                          - Developpement Web & Mobile
                          <span> - Javascript</span>
                          <br />
                          ReactJS, React-Native...
                        </li>
                        <li>
                          - Tests unitaires et fonctionnels du code
                          <span> - Jest</span>
                        </li>
                        <li>
                          - Stack
                          <br />
                          ReactJS, React-Native, Expo, NodeJS, Express, Redux,
                          Tailwind, Git, Jest, Stripe...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          - Developpeur Front-end (création d'un MVP en
                          React-Native)
                          <span>
                            {" "}
                            - Near Field Services, Cleveland US (remote)
                          </span>
                          <br />
                          De février 2023 à Juillet 2023
                        </li>
                        <li>
                          - Concepteur-développeur App. Mobile (projet en cours)
                          <span> - ElliotScottoEI</span>
                          <br />
                          Août 2023 à maintenant
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Formation Bootcamp "Concepteur-developpeur
                          d'applications mobile & sites web"
                          <span> - Le Reacteur, Paris, FR</span> 2022
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
