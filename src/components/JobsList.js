import React from "react";
import styled from "styled-components";
import moment from "moment";

const JobsListStyles = styled.section`
  display: grid;
  grid-gap: calc(var(--base-size) * 3);
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  div {
    background-color: var(--white);
    border-radius: 8px;
    padding: var(--base-size);
    position: relative;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 70px;
    border-radius: 6px;
    padding-bottom: var(--base-size);
  }

  span {
    margin-bottom: var(--base-size);
  }

  .timestamp {
    display: flex;
    margin-bottom: 0;
    p {
      display: inline-block;
      &:first-child {
        margin-right: var(--base-size);
      }
      &:last-child {
        margin-left: var(--base-size);
      }
    }
  }

  h3 {
    margin-bottom: 0;
  }
`;

const JobsList = ({ jobs, onClickCard, fullTimeOnly }) => {
  const isFilteredList = fullTimeOnly
    ? jobs.filter((job) => job.type === "Full Time")
    : jobs;
  const list = isFilteredList.map((job) => {
    const {
      company,
      company_logo,
      company_url,
      description,
      id,
      title,
      type,
      location,
      created_at,
    } = job;
    const timestamp = moment(created_at).fromNow();

    return (
      <div
        key={id}
        onClick={() =>
          onClickCard({
            company,
            company_logo,
            company_url,
            description,
            id,
            title,
            type,
            location,
            created_at,
          })
        }
      >
        <img src={company_logo} alt={company} />
        <span className="timestamp">
          <p>{timestamp}</p>
          <span>&#8226;</span>
          <p>{type}</p>
        </span>
        <span>
          <h2>{title}</h2>
          <p>{company}</p>
          <h3>{location}</h3>
        </span>
      </div>
    );
  });
  return (
    <>
      <JobsListStyles>{list}</JobsListStyles>
    </>
  );
};

export default JobsList;
