import { createGlobalStyle } from "styled-components";
import { device } from "../helpers/Mixins";

//Declaring global styles for all styles in apoplication
const Globalstyles = createGlobalStyle`
:root{
    --primaryfont:'Open Sans', sans-serif;
    --color: #4400ff;
    --primary-font:'Open Sans', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
  font-family:var(---primary-font);
  //defines what 1 rem is
  font-size: 95%;
  @media ${device.desktop} {
    background-color: red;
  }
}
`;

export default Globalstyles;
