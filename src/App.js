import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";
import Form from "./components/Form";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const getJobs = async (description = "", location = "") => {
    const response = await githubJobs.get("/positions.json", {
      method: "GET",
      params: {
        description,
        location,
      },
    });

    const data = response.data;
    console.log(data.length);
    if (data.length > 0) {
      setJobs(response.data);
      setErrorMessage("");
    } else {
      setErrorMessage("No jobs found");
    }
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
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Github Jobs
      <Form jobs={getJobs} />
      {errorMessage ? <h2>{errorMessage}</h2> : <JobsList />}
    </div>
  );
};
export default App;
