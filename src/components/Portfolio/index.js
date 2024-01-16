import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Reel-Deal',
      description: 'Interactive Front-End Page that uses 2 movie API to search and save movie prefernces',
      link: "https://fzhao888.github.io/ReelDeal/",
      repo: "https://github.com/fzhao888/ReelDeal"
    },
    {
      name: 'Weeaboo-Wisdom',
      description: 'Interactive Full-Stack application For Anime Enthusiasts Needs!',
      link: "https://github.com/atan39/Weeaboo-Wisdom",
      repo: "https://github.com/atan39/Weeaboo-Wisdom"
    },
    {
      name: 'Pets',
      description: 'Interactive MERN Stack Single-Page Application for Pet Lovers',
      link: "https://fierce-mesa-50144-4eb86e829931.herokuapp.com/",
      repo: "https://github.com/elainefmartinez/Pets"
    },
    {
      name: 'Youtube',
      description: 'Content that was recorded, edited, and scripted to learn techniques and entertain viewers',
      link: "https://www.youtube.com/@RagnamanEXE/videos",
      repo: "https://github.com/Lokistarwind"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
