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
  font-weight: 900;
}
h2{
  font-size: ${rem(30)};
  font-weight: 900;
  padding: 0 0 .5rem 0;
}
h3{
  font-size: ${rem(24)};
  color: #757A9B;
  font-weight: 400;
}
h4{
  font-size: ${rem(20)};
  color: #FE4370;
  border-bottom: 2px solid #fe4370;
  padding: 0 2rem 0.5rem 0;
}
p{
  font-size: 1.5rem;
  line-height: 190%;
  font-weight: lighter;
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
