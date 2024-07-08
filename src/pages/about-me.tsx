import { routes } from "./router";
import me from "../assets/me.jpeg";
import githubIcon from "../assets/github.svg";
import twitterIcon from "../assets/twitter.svg";

const AboutMe = () => {
  return (
    <section>
      <div className="about">
        <div className="card">
          <div className="content">
            <img src={me} alt="Nikolay" />
            <h1>
              Nikolay
              <br />
              Zhekov
            </h1>
            <div className="line"></div>
            <div className="position">SOFTWARE ENGINEER</div>
          </div>
          <div className="socials">
            <a href="https://github.com/jekovniki" target="_blank">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://x.com/ZhekovN" target="_blank">
              <img src={twitterIcon} alt="Twitter X" />
            </a>
          </div>
        </div>
        <div className="text">
          <p className="greeting">Hello</p>
          <p className="presentation">I'm full-stack developer</p>
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
          <div className="description">
            <p>
              I'm a passionate full-stack developer who loves building web
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
