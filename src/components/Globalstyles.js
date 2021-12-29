import { createGlobalStyle } from "styled-components";
import { device, rem } from "../helpers/Mixins";

//Declaring global styles for all styles in apoplication
const Globalstyles = createGlobalStyle`
:root{
    --primaryfont:'Open Sans', sans-serif;
    --accent-color: #FE4370;
    --primary-font:'Open Sans', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  color: #333;
  font-family:var(---primary-font);
}
html{
  font-size: 62.5%;  //1rem = 10px
  @media ${device.tab_land}{
    font-size: 56.25%;
  }
@media ${device.tab_port}{
  font-size: 50%;
}
@media ${device.big_desktop}{
  font-size: 75%;
}
}
body{
  box-sizing: border-box; 
  font-family: 'Open sans',sans-serif;
}
h1{
  font-size: ${rem(42)};
  font-weight: bolder;
  font-family: "Source Sans Pro", sans-serif;
}
h2{
  font-size: ${rem(25)};
  font-weight: 900;
  padding: 0 0 .5rem 0;
}
h3{
  font-size: ${rem(19)};
  color: #757A9B;
  font-weight: 400;
}
h4{
  font-size: ${rem(15)};
  color: #FE4370;
  border-bottom: 2px solid #fe4370;
  padding: 0 2rem 0.5rem 0;
}
p{

  color: #3d3d3d;
  font-family: 'Open sans', sans-serif;
}
li{
  font-size: 1.3rem;
  cursor: pointer;
}
button{
  padding: 1rem 0rem;
  margin-top: 1rem;
  background: transparent;
  border: .18rem solid #FE4370;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover{
    color: white;
    background: #FE4370;
  }
}
.link{
  text-decoration: none;
  padding: 1rem 6rem;
&:hover{
  color: white;
}
}
`;

export default Globalstyles;
