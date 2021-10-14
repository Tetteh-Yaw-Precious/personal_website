import { createGlobalStyle } from "styled-components";

console.log("Open Sans");
const Globalstyles = createGlobalStyle`
:root{
    --primaryfont:'Open Sans', sans-serif;
    --color: #4400ff;
    --primary-font:'Open Sans', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  color: #333;
  font-family:var(---primary-font);
  //defines what 1 rem is
  font-size: 95%;
  @include respond(phone) {
    font-size: 97% !important;
  } //600
  @include respond(tab-land) {
    font-size: 97%;
  } //900
  @include respond(tab-port) {
    font-size: 96%;
  } //1200
  @include respond(big-desktop) {
    font-size: 100%;
  }
}
`;

export default Globalstyles;
