import styled from "styled-components";
import background from "../../assets/background-header.jpg";
import FontsProviders from "../../FontsProviders.css";

export const Header = styled.header`
  margin: 0 auto;
  background-image: url(${background});
  background-size: 100rem;
  background-repeat: no-repeat;
  height: 80rem;
  width: 98.7vw;

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    margin-right: 0rem;
  }
  .nav-header * {
    text-decoration: none;
    margin-right: 5.5rem;
    list-style: none;
  }
  .menuToggle {
    cursor: pointer;
    font-size: 1.7rem;
    color: white;
    &:hover {
      color: #d66939 !important; 
      opacity: 1;
    }
  }
  #toggletest {
    &:hover {
      color: #d66939 !important; 
      opacity: 1;
    }
  }
  #teste {
    margin-top: 2rem;
  }
  .rede-social-header {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: rgb(00, 00, 00, 0.2);
  }
  .arrows {
    font-size: 3rem;
    margin-left: 5.8rem;
    height: 7rem;
    width: 0.4rem;
    background-color: rgb(00, 00, 00, 0.2);
  }
  .social {
    font-size: 2rem;
    margin-left: 5rem;
    &:hover {
      transition: 100ms;
      /* -o-transition: 0.5s ease-in; */
      font-size: 4rem;
    }
  }
  .containerContentHeader {
    display: flex;
  }
  .textContent-header {
    text-align: start;
    width: 30rem;
    margin-left: 4rem;
    margin-top: 2rem;
    font-family: "Nexa Bold";
  }
  #buttonContent {
    font-family: "Nexa Regular";
    background-color: rgb(00, 00, 00, 0);
    border: 2px solid #d66939;
    &:hover {
      transition: 1000ms;
      background-color: #d66939;
    }
  }
`;
export const Content = styled.section``;
export const Button = styled.button`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
