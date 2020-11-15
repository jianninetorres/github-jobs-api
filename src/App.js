import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const getJobs = async (language, location) => {
    const response = await githubJobs.get("/positions.json", {
      method: "GET",
      params: {
        description: language,
        location,
      },
    });

    console.log(response.data);
    setJobs(response.data);
  };

  const JobsList = () => {
    const list = jobs.map((job) => {
      const { company, company_logo, company_url, title } = job;
      return (
        <div>
          <img src={company_logo} alt={company} />
          <h2>{title}</h2>
          <p>{company}</p>
          <a href={company_url}>Click here</a>
        </div>
      );
    });
    return <div>{list}</div>;
  };

  useEffect(() => {
    getJobs("javascript", "toronto");
  }, []);

  return (
    <div>
      Github Jobs
      <JobsList />
    </div>
  );
};
export default App;
