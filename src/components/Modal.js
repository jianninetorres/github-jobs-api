import React from "react";
import moment from "moment";
import styled from "styled-components";
import closeIcon from "../images/close.png";

const ModalStyles = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  overflow: scroll;

  .logo-container {
    position: absolute;
    top: 50px;
    background-color: var(--white);
    border-radius: 6px;
    padding: calc(var(--base-size) * 2);
  }

  img {
    width: 100px;
    margin-bottom: var(--base-size);
  }

  img[alt="close"] {
    position: absolute;
    right: 0;
    top: 0px;
    width: 32px;
    cursor: pointer;
  }

  .job-post {
    position: absolute;
    top: 50px;
    z-index: 101;
    min-height: 400px;
    background-color: var(--white);
    border-radius: 6px;
    padding: calc(var(--base-size) * 2);
    @media screen and (min-width: 768px) {
      width: 60%;
      max-width: 800px;
    }
  }

  span {
    display: flex;
    margin-bottom: 0;
    p {
      display: inline-block;
      font-size: 1rem;
      &:first-child {
        margin-right: var(--base-size);
      }
      &:last-child {
        margin-left: var(--base-size);
      }
    }
  }

  a#company-site:not(#logo) {
    display: block;
    background-color: var(--purple);
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    margin-bottom: calc(var(--base-size) * 2);
    width: fit-content;
  }
`;

const Modal = ({ selectedCard, onClick }) => {
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
    how_to_apply,
  } = selectedCard;

  const timestamp = moment(created_at).fromNow();

  return (
    <ModalStyles>
      <div id={id} className="job-post">
        <a href={company_url} id="logo">
          <img src={company_logo} alt={company} />
        </a>
        <img src={closeIcon} alt="close" onClick={onClick} />
        <span>
          <p>{timestamp}</p>
          <span>&#8226;</span>
          <p>{type}</p>
        </span>
        <h2>{title}</h2>
        <h3>{location}</h3>
        <a href={company_url} id="company-site">
          Company site
        </a>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
      </div>
    </ModalStyles>
  );
};

export default Modal;
