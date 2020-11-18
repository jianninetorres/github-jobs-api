import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";
import GlobalStyles from "../src/styles/GlobalStyles";
import Form from "./components/Form";
import JobsList from "./components/JobsList";

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

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Form jobs={getJobs} />
      {errorMessage ? <h2>{errorMessage}</h2> : <JobsList />}
    </div>
      <GlobalStyles />
        {errorMessage ? <h2>{errorMessage}</h2> : <JobsList jobs={jobs} />}
  );
};
export default App;
