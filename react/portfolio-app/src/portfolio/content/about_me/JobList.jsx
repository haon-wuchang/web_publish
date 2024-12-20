import React from 'react';
import Job from './Job.jsx';

export default function JobList() {
    const jobList = [
        {
            "img":"images/jobs/google.png",
            "jobNm":"Google as Junior Software Engineer",
            "period":"2019 Oct - Until now"
,        },
        {
            "img":"images/jobs/samsung.png",
            "jobNm":"Samsung as Junior Software Engineer",
            "period":"2010 Oct - 2019 Oct"
,        }
    ];

    return (
        <ul className="jobs">
            {jobList.map((item)=>
                <Job 
                    img={item.img}
                    jobNm={item.jobNm}
                    period={item.period}/>
            )}
        </ul>
    );
}

