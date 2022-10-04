import React from "react";
import ProjectItem from "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/components/projectItem.js";
import "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/pages/Projects.css"

export default function Projects(){
    return(
        <div>
                <div id="projects" className="text">
                    <div id="title" >projects</div>
                    <div className="resume">
                            <ProjectItem
                                date="February 2022 — March 2022"
                                project_title="KNN and Decision Tree ML Models"
                                description_1="- Created and implemented KNN and decision tree from scratch using Python"
                                description_2=""
                                description_3=""
                            />
                            <ProjectItem
                                date="April 2022 —  May 2022"
                                project_title="Neuroevolution Simulation"
                                description_1="- Simulated neuroevolution in Unity 3D using C# and the Unity ML-Agents toolkit"
                                description_2="- Applied a genetic algorithm to a population of artificial neural networks assigned to simulated cars to emulate an ‘evolving’ population of self-driving car AIs"
                                description_3=""
                            />
                            <ProjectItem
                                date="August 2022 —  September 2022"
                                project_title="Chord Progression Generator"
                                description_1="- Created and deployed a website in HTML, CSS, and JavaScript which generates a chord progression"
                                description_2=""
                                description_3=""
                            />
                    </div>
                </div>
            
        </div>
    )
}