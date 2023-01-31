import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Archive = () => {
  const back = () => {
    window.history.back();
  };

  return (
    <div className=" min-h-screen md:min-h-screen bg-black px-8 pt-10 pb-20">
      <header className="mb-8">
        <h1 className="text-4xl md:text-7xl text-lightGrey font-bold mb-2">
          Archive
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* HOMELY */}

        <Card id="archive-card" sx={{ backgroundColor: "#112240" }}>
          <CardContent>
            <Typography variant="header">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Homely
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p className="mt-2">
                A landing page for a food ordering service.
              </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>ReactJs</span>
                <span>Tailwind CSS</span>
                <span>CSS</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/Homely.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://homelylandingpage.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* JOKE APP */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center py-2">
                Joke App
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p>A Joke App for regular humor. </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>ReactJs</span>
                <span>CSS</span>
                <span>Chuck Norris Joke API</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/myJokeApp.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://myjokeapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* APPLICATION FORM */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Application Form
              </h2>
            </Typography>
            <Typography variant="div" className="text-lightGrey text-center">
              <p>
                A validated application form for a POS product where data inputs
                in the form are stored in the local storage of the browser.
              </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/DeveloperAssessment.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://developeraccessment.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* ZEROHUNGER */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Zerohunger
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p> An e-commerce website for shopping groceries. </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>ReactJs</span>
                <span>CSS</span>
                <span>Zerohunger API</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/zeroHunger_react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://foodwebzerohunger.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* NETFLIX */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Netflix
                <span className="text-lightGreen text-xs font-medium ml-1">
                  &#40;Featured Project&#41;
                </span>
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p> A movie streaming platform clone. </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>ReactJs</span>
                <span>CSS</span>
                <span>Tailwind CSS</span>
                <span>MovieDB API</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
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

        {/* BASIC CALCULATOR */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Calculator
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p> A Basic Calculator. </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>SASS</span>
                <span>JavaScript</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/BasicCalculator.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://omolaso.github.io/BasicCalculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* SCIENTIFIC CALCULATOR */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Scientific Calculator
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p> Calculator with more functionalities. </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/Scientific-Calculator.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://omolaso.github.io/Scientific-Calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>

        {/* TODO LIST */}

        <Card sx={{ backgroundColor: "#112240" }} id="archive-card">
          <CardContent>
            <Typography variant="header" className="text-lightGrey">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Todo-List App
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p>
                Todo-list App for keeping record of daily todos. It has a light
                and dark mode toggler for the user<span>&#39;</span>s
                preference.
              </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
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

        {/* BRIGHTLY */}

        <Card id="archive-card" sx={{ backgroundColor: "#112240" }}>
          <CardContent>
            <Typography variant="header">
              <h2 className="text-xl text-lightGrey font-bold text-center">
                Brightly Landing Page
              </h2>
            </Typography>

            <Typography variant="div" className="text-lightGrey text-center">
              <p className="mt-2">
                A landing page for a learning product for students between the
                ages of 6 - 10
              </p>
            </Typography>

            <Typography variant="div">
              <section className="flex items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </section>
            </Typography>
          </CardContent>

          <CardActions className="flex items-center justify-center">
            <a
              href="https://github.com/Omolaso/Bright.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="GitHub">
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </Button>
            </a>
            <a
              href="https://omolaso.github.io/Bright/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="large" title="External Link">
                <FontAwesomeIcon icon={faLink} className="text-lg" />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>

      {/* <Link to='/'> Back </Link> */}
      <div className="absolute left-0 right-5 mt-5 mb-10 text-right">
        <button
          onClick={back}
          title="Projects"
          className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen"
          id="resume-btn"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </div>
    </div>
  );
};

export default Archive;
