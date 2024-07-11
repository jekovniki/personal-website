import { FC } from "react";
import { routes } from "./router";
import me from "../assets/me.jpeg";
import githubIcon from "../assets/github.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";
import usePageLoad from "../hooks/usePageLoad";
import useWindowWidth from "../hooks/useWindowWidth";

const AboutMe: FC = () => {
  const isLoaded = usePageLoad();
  const windowWidth = useWindowWidth();

  return (
    <section>
      <div className="about">
        <div className={`card ${isLoaded ? "loaded" : ""}`}>
          <div className="content">
            <img src={me} alt="Nikolay" />
            <h1>
              Nikolay
              <br />
              Zhekov
            </h1>
            <div className="line"></div>
            {windowWidth > 767 ? (
              <div className="position">SOFTWARE ENGINEER</div>
            ) : (
              <div className="buttons">
                <a
                  href={routes.find((route) => route.key === "resume")?.route}
                  className="button primary"
                >
                  {routes.find((route) => route.key === "resume")?.name}
                </a>
                <a
                  href={routes.find((route) => route.key === "projects")?.route}
                  className="button secondary"
                >
                  {routes.find((route) => route.key === "projects")?.name}
                </a>
              </div>
            )}
          </div>
          <div className="socials">
            <div>
              <a href="https://github.com/jekovniki" target="_blank">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikolay-zhekov-529547167/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://x.com/ZhekovN" target="_blank">
                <img src={twitterIcon} alt="Twitter X" />
              </a>
            </div>
          </div>
        </div>
        <div className={`text ${isLoaded ? "loaded" : ""}`}>
          <p className="greeting">Hello</p>
          <p className="presentation">I'm a software engineer</p>
          {windowWidth > 767 && (
            <div className="buttons">
              <a
                href={routes.find((route) => route.key === "resume")?.route}
                className="button primary"
              >
                {routes.find((route) => route.key === "resume")?.name}
              </a>
              <a
                href={routes.find((route) => route.key === "projects")?.route}
                className="button secondary"
              >
                {routes.find((route) => route.key === "projects")?.name}
              </a>
            </div>
          )}
          <div className="description">
            <p>
              I'm a passionate software engineer who loves building web
              applications. Proficient with NodeJS, Typescript, React, SQL and
              no-SQL databases.
            </p>
            <p>
              I spent first years of my career working with various CMS -
              Drupal, Adobe Experience Manager, Typo3, Shopify, WordPress and
              etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
