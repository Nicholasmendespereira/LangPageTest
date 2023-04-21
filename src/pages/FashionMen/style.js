import styled from "styled-components";

// import background from '../../assets/cortando-cabelo.jpg'

export const Header = styled.header`
  background-color: #CAD9BF;
  position: fixed;
  margin-top: -0.2rem;
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100%;
  .logo {
    width: 8%;
  }
  .nav {
    display: flex;
    text-decoration: none;
    list-style: none;
    /* justify-content: space-around; */
  }
  .nav li {
    margin-right: 3.5rem;
  }
  .barVertical {
    height: 80%;
    width: 2px;
    background-color: #aa764a;
  }
  .nav2 {
    display: flex;
    list-style: none;
  }
  .nav2 li {
    margin-right: 1rem;
    border-radius: 5px;
    padding: 0.3rem;
  }
  .iconsHeader2 {
    color: white;
    font-size: 1.2rem;
    &:hover {
      background-color: #aa764a;
      color: white;
    }
  }
  .ContainerSelect * {
    color: white;
  }
`;

export const Tittle = styled.h1`
padding-top: 12rem ;
font-size: 3rem;
  color: ${(props) => props.color};
`;
export const SubTittle = styled.h2`
  color: ${(props) => props.color};
`;
export const Main = styled.main`
  height: 75vh;
  width: 100%;
  background-color: #cad9bf;
  opacity: 1;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  width: 70%;
  margin: 2rem auto;
  padding-bottom: 10px;
  border: 1px solid rgba(170, 118, 74, 0.5);
  .input {
    width: 50%;
    margin-top: 2rem;
  }
`;
export const Carousel = styled.div`
  /* max-width: 60%px; */
  .inner {
    display: flex;
  }
  .item {
    min-height: 20%;
    width: 400px;
    padding: 12px;
  }
  .item img {
    width: 100%;
    height: 90%;
    border-radius: 12px;
    pointer-events: none;
  }
  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`;
export const Agendado = styled.div`
  font-family: "Special Elite";
  width: 25%;
  height: 20%;
  border: 1px dashed lightgrey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: gray;
  padding: 1rem;
  h3 {
    color: lightgray;
    margin: 0.5rem 0;
  }
  span {
    font-family: "Dancing Script";
    color: gray;
  }
`;
export const SubAgendado = styled.div`
  padding: 0.5rem;
  margin-top: 5%;
  width: 100%;
  height: 100%;
  border: 1px dashed lightgrey;
  border-radius: 10px;
`;
export const DetailsProcess = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0rem auto;
  padding-left: 5rem;
  width: 93.5%;
  background-image: linear-gradient(to right, #8c5c4a, rgba(64, 32, 25, 1));
  height: 100vh;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Card = styled.div`
  width: 20rem;
  height: 15rem;
  background: #a68072;
  border: 2px solid #8c5c4a;
  border-radius: 3px;
  margin: 3rem;
  color: #402019;
  font-weight: bold;
`;
