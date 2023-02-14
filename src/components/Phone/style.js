import styled from "styled-components";
import backgroundheadphone from '../../assets/background-headphone.jpg'
import background2 from '../../assets/background2.jpg'
import gifsoundsem from '../../assets/gif-sound-sem.gif'
import FontsProviders from "../../FontsProviders.css";

export const Header = styled.header`
height: 2rem;
width: 100vw;
font-family: 'Hero Bold';
color: #F2F2F2;
display: flex;
flex-direction: column;
align-items: center;
.logo {
    width: 30%;
}
`;
export const Aside = styled.aside`
font-family: 'Hero Bold';
color: #F2F2F2;
display: flex;
flex-direction: column;
align-items: flex-end;
margin-bottom: 20%;
margin-right: 5%;
@media (max-width: 500px) {
    margin-bottom: 10%;
    }
@media (max-width: 415px) {
    margin-bottom: 4%;
    }
h3 {
    font-size: 1.5em;
    text-align: start;
}
`;
export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
overflow-x: hidden;
min-height:80vh;
background-image: url(${backgroundheadphone});
background-size: 100%;
opacity: 0.9;
`;
export const Main2 = styled.div`
min-height: 88vh;
background-image: url(${background2});
background-repeat: no-repeat;
background-size: 100%;
background-position: 10% 92%;
@media (max-width: 415px) {
    min-height: 93.5vh;
    }
`;
export const Card = styled.div`
/* border-bottom: 1px solid rgba(242, 242, 242, 0.1) ; */
color: #F2F2F2;
align-items: ${(props) => props.position};
margin: ${(props) => props.margin};
text-align: ${(props) => props.position};;
font-family: 'Hero Light';
display: flex;
flex-direction: column;
h4 {
    font-size: 0.9em;
}
small {
    font-size: 0.7em;
}
.icon {
    font-size: 1.5em;
    margin-top: 1rem;
}
`;
export const Button = styled.button`
background-color: #F2F2F2;
height: 3rem;
width: 9rem;
color: #59463B;
font-family: 'Hero Bold';
border: 2.5px solid #0D0D0D;
cursor: pointer;
&:hover {
    border: 2.5px solid #59463B;
    color: #F2F2F2;
    transition: ease-in-out 100ms;
    background-color: rgba(242, 242, 242, 0.1);
}
`;
export const Button2 = styled.button`
background-color: #F2F2F2;
height: 3rem;
width: 9rem;
color: #59463B;
font-family: 'Hero Bold';
border: 2.5px solid rgba(217, 183, 154, 1);
cursor: pointer;
&:hover {
    border: 2.5px solid #59463B;
    color: #F2F2F2;
    transition: ease-in-out 100ms;
    background-color: rgba(217, 183, 154, 1);
}
`;
export const Main3 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
min-height: 70vh;
background-color: #735F4D;
`;
export const Div = styled.div`
height: 15rem;
transform: ${(props) => props.rotate};
background-position: 0% -20%;
background-image: url(${gifsoundsem});
background-repeat: no-repeat;
background-size: 100%;
`;
export const Footer = styled.footer`
font-family: 'Hero Regular';
background-color: #0D0D0D;
height: 90vh;
@media (max-width: 415px) {
    height: 80vh;
    }
@media (max-width: 376px) {
    height: 89vh;
    }
.socialIcon{
    cursor: pointer;
    font-size: 1.5em;
    color: white;
    margin-right: 1rem;
}
.contact{
    color:white;
}
`;