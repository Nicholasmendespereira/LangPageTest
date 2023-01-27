import styled from "styled-components";
import background from "../../assets/background-header.jpg";
import background2 from '../../assets/mountains.jpg'
import FontsProviders from "../../FontsProviders.css";

export const Tittle = styled.h2`
font-weight: bold;
font-size: 1.2rem;
`;
export const SubTittle = styled.h3`
font-size:1rem;
font-weight: bolder;
margin-right: 1rem;
`;
export const Buttton = styled.button`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
export const BarColor = styled.div`
height: 0.5rem;
background-color: #d66939;
font-family: 'Hero Bold';
`;
export const NoStyled = styled.div`
.ButtonSolitary {
  margin: 2rem 0 0 55rem;
  background-color: #d66939;
  border: none;
  color: white;
  height: 3rem;
  width: 13rem;
  text-align: center;
  font-family: 'Hero Bold';
  font-size: 0.9rem;
  transition: all 1000ms;
  &:hover {
    transition: all 900ms;
    color: #d66939;
    border: 2px solid #d66939;
    background-color: white;
  }
}
`;
export const ContainerFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
.iconContent2{
  font-size: 2rem;
}
.imgsContainer3 {
  width: 33%;
  height: 50rem;
}
.containerPerfilContent4 {
  display: flex;
}
.imgContainer4 {
  width: 20%;
}
.content3 {
  width: 10rem;
} 
.containerContentProfile {
  width: 50%;
  text-align: start;
  margin-left: 2rem;
}
.content5 {
  width: 70%;
}
.barColorForm {
  width: 70%;
  margin-right: -2rem;
}
`;
export const Header = styled.header`
  margin: 0 auto;
  background-image: url(${background});
  background-size: 100rem;
  background-repeat: no-repeat;
  height: 60rem;
  width: 98.7vw;
  @media (max-width: 900px) {
    background-size: 100%;
    }


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
    @media (max-width: 900px) {
      margin-right: 0rem;
    }
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
    transition: all 1000ms;
    &:hover {
      transition: 500ms;
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
    height: 2.5rem;
    width: 12rem;
    font-family: "Nexa Regular";
    background-color: rgb(00, 00, 00, 0);
    border: 2px solid #d66939;
    transition: all 1000ms;
    &:hover {
      color: white;
      transition: 1000ms;
      background-color: #d66939;
    }
  }
`;
export const Content = styled.section``;

export const Content2 = styled.div`
  height: 30rem;
  .content2 {
  width: 50vw;
  margin-right: 10rem;
}
  `;
export const Content3 = styled.div`
  background-size: 100rem;
  background-repeat: no-repeat;
  background-image: url(${background2});
  height: 50rem;
  .AfterFooter {
     justify-content: space-around;
  }
  `;
export const Footer = styled.footer`
  height: 10rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .social {
    font-size: 2rem;
    margin-left: 0.5rem;
    transition: all 1000ms;
    &:hover {
      transition: 500ms;
      font-size: 2.2rem;
    }
  }
  .ButtonSolitary {
  background-color: #d66939;
  border: none;
  color: white;
  height: 3rem;
  width: 13rem;
  text-align: center;
  font-family: 'Hero Bold';
  font-size: 0.9rem;
  transition: all 1000ms;
  &:hover {
    transition: all 900ms;
    color: #d66939;
    border: 2px solid #d66939;
    background-color: white;
  }
  @media (max-width: 900px) {
    background-size: 100%;
    }
} 
.numberFooter {
  color: white;
  list-style: none;
  text-decoration: none;
}
.uparrow {
  position: relative;
    left: 85%;
    bottom: 50%;
    font-size: 3rem;
    transition: all 1000ms;
    cursor: pointer;
    &:hover {
      transition:  all 1000ms;
      opacity: 0.5;
      font-size: 4rem;
    }
}

  `;


