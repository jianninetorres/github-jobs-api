import React from "react";
import styled from "styled-components";

const JobsListStyles = styled.section`
  div {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
  }
`;

const JobsList = ({ jobs }) => {
  const list = jobs.map((job) => {
    const { company, company_logo, company_url, id, title } = job;
    return (
      <div key={id}>
        <img src={company_logo} alt={company} />
        <h2>{title}</h2>
        <p>{company}</p>
        <a href={company_url}>Click here</a>
      </div>
    );
  });
  return <JobsListStyles>{list}</JobsListStyles>;
};

export default JobsList;
