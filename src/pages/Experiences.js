import React from "react";
import ExperienceItem from "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/components/experienceItem.js";
import "/Users/juanlucasumali/Desktop/berkeley/codebase/mentoredfa22/website-juan/src/pages/Experiences.css"
import axios from "axios";


export default function Experience(){
    
    const [exper, setExper] = React.useState(null);
    async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/appZgERjSyXyIdFZJ/Projects?maxRecords=10&view=Grid%20view",
      {
        headers: {
          authorization: `Bearer keyJff48m18Xx0Ndg`,
        },
      }
    );
    console.log(res.data);
    setExper(res.data.records);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!exper) {
    return <div>Loading...</div>;
  }
    
    return(
        <div>
                <div id="experiences" className="text">
                    <div id="title" >experiences</div>
                    <div id="resume">

                        {exper.map((record) => (
                        <ExperienceItem key={record.id} company={record.fields.company} date={record.fields.date} role={record.fields.role} description_1={record.fields.description_1} description_2={record.fields.description_2} description_3={record.fields.description_3}/>
                        ))}

                    </div>
                </div>
            
        </div>
    )
}