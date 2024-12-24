import React, { useEffect, useState } from 'react';
import Job from './Job.jsx';

export default function JobList() {
    const [jobList,setJobList]=useState([]);
    useEffect(()=>{
        fetch('json_data/project.json')
            .then(data=>data.json())
            .then(jsonData=>setJobList(jsonData.jobList))
            .catch(error=>console.log(error));
    },[]);

    return (
        <ul className="jobs">
            {jobList && jobList.map((item)=>
                <Job 
                    img={item.img}
                    jobNm={item.jobNm}
                    period={item.period}/>
            )}
        </ul>
    );
}

