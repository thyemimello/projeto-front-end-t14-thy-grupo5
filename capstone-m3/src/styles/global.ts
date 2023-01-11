import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
button, input {
  border: none;
  cursor: pointer;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
:root{
--color-background:#1c1c29;
--color-btnregister: #1965848c;
--color-font: #44b7e6;
--color-title: #000000;
--color-title: #ffffff;

--font-family:'Open Sans', sans-serif;
--font-size-12: 0.75rem;
--font-size-16: 1rem;
--font-size-18: 1.125rem;
--font-size-20: 1.5rem;
--font-size-24: 1.25rem;



    
}

.title1 {
  font-weight: 700;
  font-size: 26px;
}
.title2 {
  font-weight: 700;
  font-size: 22px;
}
.title3 {
  font-weight: 700;
  font-size: 18px;
}
.title4 {
  font-weight: 400;
  font-size: 16px;
}
.title5{
  font-weight: 500;
  font-size: 14px;
}
.title6 {
  font-weight: 600;
  font-size: 16px;
}
.title7{
  font-weight: 400;
  font-size: 12px;
}
.title8 {
  font-weight: 400;
  font-size: 22px;
}
`