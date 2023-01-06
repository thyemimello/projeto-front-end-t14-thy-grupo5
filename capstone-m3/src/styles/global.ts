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