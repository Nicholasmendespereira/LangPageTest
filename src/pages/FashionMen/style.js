import styled from 'styled-components'
import background from '../../assets/cortando-cabelo.jpg'

export const Header = styled.header`
display: flex;
align-items: center;
height: 5rem;
width: 100%;
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
height: 90vh;
width: 100%;
background-image:url(${props => props.backgroundImage});
background-repeat: no-repeat;
background-size: 100%;
background-position: 50% 50%;
opacity: 1;
`;
export const Div = styled.div`
width: 100%;
height: 10vh;
background-color: rgba(255,255,255,1);
`;
export const Form = styled.form`
width: 70%;
margin: 2rem auto;
padding-bottom: 10px;
border: 1px solid rgba(170,118,74, 0.5);
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
    min-height:20%;
    width: 400px;
    padding:12px;
}
.item img{
    width:100%;
    height:90%;
    border-radius: 12px;
    pointer-events:none;
}
.carousel {
    cursor: grab;
    overflow: hidden;
}
`;
export const Agendado = styled.div`
font-family: 'Special Elite';
width: 25%;
height: 20%;
border: 1px dashed lightgrey;
border-radius:20px;
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
    font-family: 'Dancing Script';
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
align-items: center;
justify-content: center;
margin:2rem auto;
width:100%;
background-image: linear-gradient(to bottom, lightgray, rgba(255,255,255,0.2));
height: 100vh;
`;