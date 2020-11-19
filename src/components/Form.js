import React, { useState } from "react";
import styled from "styled-components";
import filterIcon from "../images/icon-filter.svg";
import searchIcon from "../images/icon-search.svg";

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

  fieldset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    flex-basis: 180px;
    flex: 1 1 auto;
    padding: 0;

    &:nth-child(2),
    &:nth-child(3) {
      flex: 0;
    }
  }

  input {
    border: 0;
  }

  input[name="description"] {
    min-height: calc(var(--base-size) * 2);

    &::before {
      content: "";
    }
  }

  input[name="location"] {
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  input[name="type"] {
    display: none;
  }

  button {
    background-color: var(--purple);
    border: none;
    border-radius: 6px;
    padding: calc(var(--base-size) / 2);
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
      <fieldset>
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
        <img src={filterIcon} />
      </fieldset>
      <fieldset>
        <label htmlFor="location">Filter by location... </label>
        <input
          type="text"
          name="location"
          onChange={onHandleLocationChange}
          value={location}
          placeholder="Filter by location..."
        />
      </fieldset>
      <fieldset>
        <label htmlFor="type">Full Time Only</label>
        <input type="checkbox" name="type" />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </fieldset>
    </FormStyles>
  );
};

export default Form;
