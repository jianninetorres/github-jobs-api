import React, { useEffect, useState } from "react";
import githubJobs from "./api/githubJobs";
import GlobalStyles from "../src/styles/GlobalStyles";
import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
import Form from "./components/Form";
import JobsList from "./components/JobsList";
import Modal from "./components/Modal";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCard, setSelectedCard] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const getCard = (card) => {
    console.log(card);
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    return isModalOpen === true ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  return (
    <>
      <GlobalStyles />
      <Header title="devjobs">
        <Form jobs={getJobs} />
      </Header>
      <Layout>
        {isModalOpen ? (
          <Modal selectedCard={selectedCard} onClick={toggleModal} />
        ) : (
          ""
        )}
        {errorMessage ? (
          <h2>{errorMessage}</h2>
        ) : (
          <JobsList jobs={jobs} onClickCard={getCard} />
        )}
      </Layout>
    </>
  );
};
export default App;
