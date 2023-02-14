import styled from 'styled-components'

export const Header = styled.header`
display: flex;
align-items: center;
height: 5rem;
width: 100vw;
margin-left: calc(10% - 0.2rem);
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
    font-size: 1.2rem;
    &:hover{
        background-color:  #AA764A;
        color: white;
    }
}
`;