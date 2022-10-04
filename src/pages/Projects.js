import React from "react";
import ProjectItem from "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/components/projectItem.js";
import "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/pages/Projects.css"
import axios from "axios";

export default function Projects(){
    
    
    const [proj, setProj] = React.useState(null);
    async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/appr21utG5vIoAI3c/Projects?maxRecords=10&view=Grid%20view",
      {
        headers: {
          authorization: `Bearer keyJff48m18Xx0Ndg`,
        },
      }
    );
    console.log(res.data);
    setProj(res.data.records);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!proj) {
    return <div>Loading...</div>;
  }
    
    
    
    return(
        <div>
                <div id="projects" className="text">
                    <div id="title" >projects</div>
                    <div className="resume">

                        {proj.map((record) => (
                        <ProjectItem key={record.id} date={record.fields.date} project_title={record.fields.project_title} description_1={record.fields.description_1} description_2={record.fields.description_2} description_3={record.fields.description_3}/>
                        ))}

                    </div>
                </div>
            
        </div>
    )
}