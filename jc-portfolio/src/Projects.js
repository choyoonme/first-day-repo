import cubism from "./assets/cubism.png";
import tictactoe from "./assets/damonstefan.png";
import github from "./assets/githubicon.png";
import weather from "./assets/weather.png";
import moviewatchlist from "./assets/moviewatchlist.png";

const projects = [
  {
    title: "The Blue Album",
    deployed: "https://choyoonme.github.io/blue-album/",
    repo: "https://github.com/choyoonme/blue-album",
    img: cubism,
  },
  {
    title: "Damon & Stefan",
    deployed: "https://choyoonme.github.io/damon-stefan/",
    repo: "https://github.com/choyoonme/damon-stefan",
    img: tictactoe,
  },
  {
    title: "Weather Dashboard",
    deployed: "https://choyoonme.github.io/weather_dash/",
    repo: "https://github.com/choyoonme/weather_dash",
    img: weather,
  },
  {
    title: "Movie Watchlist",
    deployed: "https://choyoonme.github.io/movie-watchlist/",
    repo: "https://github.com/choyoonme/movie-watchlist",
    img: moviewatchlist,
  },
];

function Project({ title, deployed, repo, img }) {
  return (
    <li className="work" id="proj2">
      <a target="_blank" rel="noreferrer" href={deployed}>
        <img src={img} alt="cropped game board" />
        {title}
      </a>
      <a target="_blank" rel="noreferrer" href={repo}>
        <img src={github} alt="github" className="github-icon" />
      </a>
      <br />
    </li>
  );
}
function Projects() {
  return (
    <div className="portfolio-wrapper">
      <ul className="portfolio-content">
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              deployed={project.deployed}
              repo={project.repo}
              img={project.img}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default Projects;
