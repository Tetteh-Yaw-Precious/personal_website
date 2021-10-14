import { createGlobalStyle } from "styled-components";
import { device } from "../helpers/Mixins";

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
  font-size: 62.5%;
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
p{
  font-size: 1.5rem;
}
`;

export default Globalstyles;
