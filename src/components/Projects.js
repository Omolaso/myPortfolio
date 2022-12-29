import * as React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import QR from "../images/QR.png";
import Todo from "../images/todo.png";
import Netflix from "../images/netflix.png";
import Artsy from "../images/artsy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../styles/Project.css";

function Div({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main ref={ref} className="framer-section">
      <section
        style={{
          transform: isInView ? "none" : "translateX(500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </section>
    </main>
  );
}

const Projects = () => {
  return (
    <>
      <main className="flex flex-col gap-y-8">
        <header>
          <h1 className="text-3xl text-lightGrey font-bold">
            <span className="text-lightGreen text-xl mr-2">02.</span> My
            Projects
          </h1>
        </header>

        {/* Project Container Div*/}
        <div className="flex flex-col items-center justify-center text-deepGrey text-lg gap-y-12 font-medium">
          {/* ARTSY */}
          <Div>
            <Card className="w-full mx-auto max-w-4xl">
              <CardMedia
                component="img"
                height="100"
                image={Artsy}
                alt="Artsy"
              />
              <CardContent className="bg-black">
                <Typography variant="header" component="div">
                  <h2 className="text-xl text-lightGrey font-bold text-center">
                    Artsy
                  </h2>
                </Typography>

                <Typography variant="div" color="text.secondary">
                  <p className="text-lightGreen text-center">
                    A website to shop photographic artifacts and other amazing
                    photographic works.
                  </p>
                  <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                    <span>ReactJs</span>
                    <span>TailwindCSS</span>
                    <span>Random JPEGs</span>
                  </div>
                </Typography>
              </CardContent>

              <CardActions className="flex items-center justify-center bg-black">
                <a
                  href="https://github.com/Omolaso/artsy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </Button>
                </a>

                <a
                  href="https://artsymarketplace.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="External Link">
                    <FontAwesomeIcon icon={faLink} className="text-lg" />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Div>

          {/* QR CODE GENERATOR */}

          <Div>
            <Card className="w-full mx-auto max-w-4xl">
              <CardMedia
                component="img"
                height="100"
                image={QR}
                alt="Brightly"
              />
              <CardContent className="bg-black">
                <Typography variant="header" component="div">
                  <h2 className="text-xl text-lightGrey font-bold text-center">
                    QR Code Generator
                  </h2>
                </Typography>

                <Typography variant="div" color="text.secondary">
                  <p className="text-lightGreen text-center">
                    A code generator for generating rapid codes to access
                    websites.
                  </p>
                  <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                    <span>HTML</span>
                    <span>Tailwind</span>
                    <span>JavaScript</span>
                  </div>
                </Typography>
              </CardContent>

              <CardActions className="flex items-center justify-center bg-black">
                <a
                  href="https://github.com/Omolaso/QR-Code-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </Button>
                </a>

                <a
                  href="https://omolaso.github.io/QR-Code-Generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="External Link">
                    <FontAwesomeIcon icon={faLink} className="text-lg" />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Div>

          {/* NETFLIX */}

          <Div>
            <Card className="w-full mx-auto max-w-4xl">
              <CardMedia
                component="img"
                height="100"
                image={Netflix}
                alt="Netflix"
              />
              <CardContent className="bg-black">
                <Typography variant="header" component="div">
                  <h2 className="text-xl text-lightGrey font-bold text-center">
                    Netflix
                    <span className="text-lightGreen text-xs font-medium ml-2">
                      &#40;Featured Project&#41;
                    </span>
                  </h2>
                </Typography>

                <Typography variant="div" color="text.secondary">
                  <p className="text-lightGreen text-center">
                    A movie streaming platform clone.
                  </p>
                  <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                    <span>React</span>
                    <span>CSS</span>
                    <span>Tailwind CSS</span>
                    <span>MovieDB API</span>
                  </div>
                </Typography>
              </CardContent>

              <CardActions className="flex items-center justify-center bg-black">
                <a
                  href="https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </Button>
                </a>

                <a
                  href="https://netflix-duplicate.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="External Link">
                    <FontAwesomeIcon icon={faLink} className="text-lg" />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Div>

          {/* TODO-LIST */}

          <Div>
            <Card className="w-full mx-auto max-w-4xl">
              <CardMedia
                component="img"
                height="100"
                image={Todo}
                alt="TodoList App"
              />
              <CardContent className="bg-black">
                <Typography variant="header" component="div">
                  <h2 className="text-xl text-lightGrey font-bold text-center">
                    Todo-List App
                  </h2>
                </Typography>

                <Typography variant="div" color="text.secondary">
                  <p className="text-lightGreen text-center">
                    Todo-list App for keeping record of daily todos. It has a
                    light and dark mode toggler for the user<span>&#39;</span>s
                    preference.
                  </p>
                  <div className="flex items-center justify-around mx-auto text-lightGrey text-xs w-full max-w-xs mt-3">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>
                </Typography>
              </CardContent>

              <CardActions className="flex items-center justify-center bg-black">
                <a
                  href="https://github.com/omolaso/toDo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </Button>
                </a>

                <a
                  href="https://omolaso.github.io/toDo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="External Link">
                    <FontAwesomeIcon icon={faLink} className="text-lg" />
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Div>

          {/* More Project Button */}
          <Div>
            <div className="text-center">
              <Link to="/archive">
                <button
                  className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen"
                  id="resume-btn"
                >
                  View other projects
                </button>
              </Link>
            </div>
          </Div>
        </div>
      </main>
    </>
  );
};

export default Projects;
