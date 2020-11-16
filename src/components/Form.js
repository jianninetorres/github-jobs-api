import React, { useState } from "react";

const Form = ({ jobs }) => {
  const [description, setDescription] = useState("Javascript");
  const [location, setLocation] = useState("New York");

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
    <form action="" method="get" onSubmit={onHandleSubmit}>
      <label htmlFor="description">
        Filter by title, companies, expertise...{" "}
      </label>
      <input
        type="text"
        name="description"
        onChange={onHandleDescriptionChange}
        value={description}
      />
      <label htmlFor="location">Filter by location... </label>
      <input
        type="text"
        name="location"
        onChange={onHandleLocationChange}
        value={location}
      />
      <label htmlFor="type">Full Time Only</label>
      <input type="checkbox" name="type" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
