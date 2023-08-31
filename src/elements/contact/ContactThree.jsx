import React, { useState, useCallback } from "react";
const Result = ({ message }) => {
  return <h6 style={{ marginTop: 20, color: "#ffffff" }}>{message}</h6>;
};
export default function ContactThree() {
  const [rnName, setRnName] = useState("");
  const [rnEmail, setRnEmail] = useState("");
  const [rnSubject, setRnSubject] = useState("");
  const [rnMessage, setRnMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      let data = {
        name: rnName,
        email: rnEmail,
        subject: rnSubject,
        message: rnMessage,
      };

      let response = await fetch(
        "https://site--backend-portfolio--cpx4vl465khg.code.run/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      let responseData = await response.json();
      if (responseData === "success") {
        setFeedbackMessage("Mail envoyé à Elliot !");
        setTimeout(() => {
          setFeedbackMessage("");
        }, 5000);
      } else if (responseData === "error") {
        setFeedbackMessage("Erreur lors de l'envoi du mail");
        setTimeout(() => {
          setFeedbackMessage("");
        }, 5000);
      }
    },
    [rnName, rnEmail, rnSubject, rnMessage]
  );

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">Contact</h2>
              <p className="description">
                Je suis disponible pour un travail en freelance et autres
                contrats (CDD, CDI...). Joignez-moi via{" "}
                <a href="http://www.linkedin.com/in/elliotscotto/">linkedIn</a>{" "}
                ou par mail :{" "}
                <a href="mailto:scotto.elliot@gmail.com">
                  scotto.elliot@gmail.com
                </a>
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={rnName}
                    onChange={(e) => {
                      setRnName(e.target.value);
                    }}
                    placeholder="Votre Nom *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={rnEmail}
                    onChange={(e) => {
                      setRnEmail(e.target.value);
                    }}
                    placeholder="Votre Email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={rnSubject}
                    onChange={(e) => {
                      setRnSubject(e.target.value);
                    }}
                    placeholder="Objet"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={rnMessage}
                    onChange={(e) => {
                      setRnMessage(e.target.value);
                    }}
                    placeholder="Votre Message"
                  />
                </label>
                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Envoyer
                </button>
                <Result message={feedbackMessage} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
