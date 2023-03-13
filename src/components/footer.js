import githubLogo from "../assets/images/github-footer.png";
import linkedinLogo from "../assets/images/linkedin-logo-footer.png";
import stackLogo from "../assets/images/stack-overflow.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function footer() {
  return (
    <footer
      class="d-flex justify-content-around"
      style={{
        backgroundColor: "black",
      }}
    >
      <p>
        © {new Date().getFullYear()}, Made with <AiOutlineHeart /> by Wei
      </p>
      <span className="navbar-text">
        <div className="social-icon">
          <a
            href="https://github.com/WeitheFang"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/wei-chi-fang-60610523b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinLogo} alt="linkedin" />
          </a>
          <a
            href="https://stackoverflow.com/users/21386556/weithefang"
            target="_blank"
          >
            <img src={stackLogo} alt="stack-overflow" />
          </a>
        </div>
      </span>
    </footer>
  );
}

export default footer;
