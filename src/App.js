import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";
import GlobalStyles from "../src/styles/GlobalStyles";
import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
import Form from "./components/Form";
import JobsList from "./components/JobsList";
import Modal from "./components/Modal";
import LoadingDotsStyles from "./components/LoadingDots";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const getJobs = async (description = "", location = "") => {
    const response = await githubJobs.get("/positions.json", {
      method: "GET",
      params: {
        description,
        location,
      },
    });

    const data = response.data;
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

  const getCard = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    return isModalOpen === true ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  const getType = () => {
    return fullTimeOnly === false
      ? setFullTimeOnly(true)
      : setFullTimeOnly(false);
  };

  return (
    <>
      <GlobalStyles />
      <Header title="devjobs">
        <Form jobs={getJobs} isFullTimeOnly={getType} />
      </Header>
      <Layout>
        {isModalOpen ? (
          <Modal selectedCard={selectedCard} onClick={toggleModal} />
        ) : (
          ""
        )}
        {errorMessage ? (
          <h2>{errorMessage}</h2>
        ) : jobs.length > 0 ? (
          <JobsList
            jobs={jobs}
            onClickCard={getCard}
            getFullTimeOnly={fullTimeOnly}
          />
        ) : (
          <LoadingDotsStyles />
        )}
      </Layout>
    </>
  );
};
export default App;
