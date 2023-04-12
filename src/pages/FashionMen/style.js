import styled from 'styled-components'
import background from '../../assets/cortando-cabelo.jpg'

export const Header = styled.header`
display: flex;
align-items: center;
height: 5rem;
width: 100vw;
.logo{
    width: 8%;
}
.nav {
    display: flex;
    text-decoration: none;
    list-style: none;
    /* justify-content: space-around; */
}
.nav li{
    margin-right: 3.5rem;
}
.barVertical{
    height: 80%;
    width: 2px;
    background-color: #AA764A;
}
.nav2 {
    display: flex;
    list-style: none;    
}
.nav2 li{
    margin-right: 1rem;   
    border-radius: 5px;
   padding: 0.3rem;
}
.iconsHeader2 {
    color: white;
    font-size: 1.2rem;
    &:hover{
        background-color:  #AA764A;
        color: white;
    }
}
.ContainerSelect *{
color: white;
}
`;
export const Main = styled.main`
height: 100vh;
width: 100vw;
background-image:url(${background});
background-repeat: no-repeat;
background-size: 100%;
opacity: 1;
`;
export const Div = styled.div`
width: 100vw;
height: 10vh;
background-color: rgba(255,255,255,1);
`;
export const Form = styled.form`
width: 40%;
margin: 2rem auto;
border: 1px solid rgba(170,118,74, 0.5);
.input {
    width: 50%;
    margin-top: 2rem;
}
`;
export const Agendado = styled.div`
width: 30%;
height: 20%;
border: 1px solid lightgrey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
color: gray;
h3 {
    color: lightgray
}
span {
    color: gray;
}
`;
export const SubAgendado = styled.div`
margin-top: 5%;
width: 100%;
height: 100%;
border: 1px solid lightgrey;
border-radius: 10px;
`;