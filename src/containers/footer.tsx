import githubIcon from "../assets/github.svg";
import twitterIcon from "../assets/twitter.svg";
import linkedinIcon from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="copyrights">
          © {new Date().getFullYear()} by Nikolay Zhekov.
        </div>
      </div>
      <div>
        <div className="follow-column">
          <div className="label">Follow</div>
          <div className="socials">
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
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
