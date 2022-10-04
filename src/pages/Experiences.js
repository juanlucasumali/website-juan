import React from "react";
import ExperienceItem from "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/components/experienceItem.js";
import "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/pages/Experiences.css"

export default function Experience(){
    return(
        <div>
                <div id="experiences" className="text">
                    <div id="title" >experiences</div>
                    <div id="resume">
                            <ExperienceItem
                                company='Codebase'
                                date="June 2022 - Present"
                                role="Software Developer"
                                description_1="- A UC Berkeley student organization that builds software projects for high growth tech companies"
                                description_2="- Worked with San Francisco Conservatory Of Music to aggregate user statistics and create a dashboard to display user and community yearly statistics"
                                description_3="- Utilized React, Node.js, HTML, CSS, and Spectrix API"
                            />
                            <ExperienceItem
                                company='City University of Hong Kong'
                                date="June 2022 — Present"
                                role="Research Assistant"
                                description_1="- Analyzed Genome-Wide Association Studies summary data to identify shared genes between AIDS and heart disease using Python, Unix, and a pathway scoring algorithm (PASCAL)"
                                description_2="- Conducted enrichment analysis on the shared genes with the genetic analysis tools FUMA and FunCoup to construct gene networks, gene expression heat maps, and differentially expressed gene analyses
                                "
                                description_3="- Findings helped advance the lab’s understanding of AIDS and heart disease etiologies, suggested important common biological pathways to help identify therapeutic targets for multiple diseases
                                "
                            />
                            <ExperienceItem
                                date="April 2020  - June 2022"
                                role="Senator of Student Life"
                                description_1="- Raised 83,000 HKD to support service NGOs in Cambodia, Thailand, and Mongolia which target underprivileged communities"
                                description_2="- Developed a new structure for the student government with the administration and an Educational Development Consultant"
                                description_3="- Pioneered HKIS high-school’s first virtual club marketplace for 719 users in response to Covid-19 social distancing restrictions"
                            />
                    </div>
                </div>
            
        </div>
    )
}