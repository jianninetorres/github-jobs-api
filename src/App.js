import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";
import GlobalStyles from "../src/styles/GlobalStyles";
import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
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
    console.log(data);
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
    <>
      <GlobalStyles />
      <Header title="devjobs">
        <Form jobs={getJobs} />
      </Header>
      <Layout>
        {errorMessage ? <h2>{errorMessage}</h2> : <JobsList jobs={jobs} />}
      </Layout>
    </>
  );
};
export default App;
