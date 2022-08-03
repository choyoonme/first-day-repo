import resume from "./assets/resume.png";

function Footer({ lastUpdated }) {
  return (
    <div>
      <div className="foot-wrap">
        <footer id="contact">
          <a href="mailto:yoonme@gmail.com">email</a>
          <a href={resume} rel="noreferrer" target="_blank">
            resume
          </a>
          <a href="https://github.com/choyoonme">GitHub</a>
          <a href=" https://www.linkedin.com/in/jenniferycho/ ">LinkedIn</a>
        </footer>
        <p>last updated {lastUpdated}</p>
      </div>
    </div>
  );
}

export default Footer;
