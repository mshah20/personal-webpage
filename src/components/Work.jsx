import React from "react";
import './Work.css';
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";

const Work = () => {

  const productLandingPage = {
    imageURL: "media/product-landing-page.png",
    title: "Product Landing Page",
    description: "Standard promotional page for merchandise revolving around the Call of Duty: Modern Warfare II game. Includes the video trailer, content information, all editions, and a newsletter section.",
    skills: ["HTML", "CSS"],
    link: "https://github.com/mshah20/product-page"
  }

  const animalCrossingCollection = {
    imageURL: "media/animal-crossing-collection.png",
    title: "Animal Crossing Critter Collection",
    description: "A database type of web page that provides all fish, sea creatures, and bugs from the game Animal Crossing: New Horizons along with their price from an API. Also features popups for each creature to view their catchprase.",
    skills: ["React", "Node.js", "Express", "CSS", "Javascript"],
    link: "https://github.com/mshah20/animal-crossing-collection"
  }

  const financeApp = {
    imageURL: "media/finance-app.png",
    title: "Finance App",
    description: "A budgeting web page that can be connected to a database to keep track of your money. Allows you to add, remove, and view all your transactions along with your total balance.",
    skills: ["React", "Node.js", "Express", "CSS", "PostgreSQL", "pgAdmin4"],
    link: "https://github.com/mshah20/finance-app"
  }

  return(
    <div id="work-background">
      <div id="work-body">
        <h1 className="work-header">Featured Work</h1>
        
        <ProjectCard1 image={productLandingPage.imageURL} 
          title={productLandingPage.title}
          description={productLandingPage.description}
          skills={productLandingPage.skills}
          link={productLandingPage.link}
        />
      
        <ProjectCard2 image={animalCrossingCollection.imageURL} 
          title={animalCrossingCollection.title}
          description={animalCrossingCollection.description}
          skills={animalCrossingCollection.skills} 
          link={animalCrossingCollection.link}
        />

        <ProjectCard1 image={financeApp.imageURL} 
          title={financeApp.title}
          description={financeApp.description}
          skills={financeApp.skills}
          link={financeApp.link}
        />
      
      </div>
    </div>
  );
}

export default Work;