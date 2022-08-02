import "./App.css";

function About() {
  return (
    <body>
      <div className="wrapper">
        <div className="name-photo">
          <p className="name">Jen Cho</p>
          <img
            className="photo"
            src="jc-portfolio/assets/moi.jpg"
            alt="portrait"
          />
        </div>
        <div className="statement" id="aboutme">
          <p>
            Front-end web developer with a background in Library Science and
            Fine Arts. Recently earned a certificate in full stack development
            from the Penn LPS Boot Camp where I developed skills in responsive
            design using HTML, CSS, and JavaScript.
          </p>
          <p>
            My strengths are driven by a passion for pragmatism, simplicity, and
            design. When working on projects, I am inclined to make sure I
            connect with other members of my team and have been known commit to
            meeting requirements and deadlines. I am inspired and motivated to
            work as part of a team to thoughtfully streamline and build better
            experiences on the web.
          </p>
        </div>
      </div>
    </body>
  );
}
export default About;
