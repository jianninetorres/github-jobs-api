import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 6px;
  width: 100%;
  min-height: 60px;
  background-color: var(--white);
  padding: 0 var(--base-size);

  label:not([for="checkbox"]) {
    //hide label visually but keep them available to screen reader and other assistive technology
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  input[name="description"] {
    border: 0;
    flex-basis: 180px;
    flex: 1 1 auto;
    min-height: calc(var(--base-size) * 2);
  }

  input[name="location"] {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`;

const Form = ({ jobs }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const onHandleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onHandleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    jobs(description, location);
  };

  return (
    <FormStyles action="" method="get" onSubmit={onHandleSubmit}>
      <label htmlFor="description">
        Filter by title, companies, expertise...
      </label>
      <input
        type="text"
        name="description"
        onChange={onHandleDescriptionChange}
        value={description}
        placeholder="Filter by title, companies, expertise..."
      />
      <label htmlFor="location">Filter by location... </label>
      <input
        type="text"
        name="location"
        onChange={onHandleLocationChange}
        value={location}
        placeholder="Filter by location..."
      />
      <label htmlFor="type">Full Time Only</label>
      <input type="checkbox" name="type" />
      <button type="submit">Search</button>
    </FormStyles>
  );
};

export default Form;
