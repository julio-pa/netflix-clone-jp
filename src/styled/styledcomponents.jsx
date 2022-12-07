import styled from "styled-components";
import { InputBase } from "@material-ui/core";


export const NetflixInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding:22px;
  height:16px;
  width: 30vw;
  border: none;
`

const handlewidth = wide => {
  switch(wide){
    case "fullWidth": return "100%";
    case "medium": return "260px";
    default: return "160px"
  }
}

export const NetflixButton = styled.button`
  background-color: ${({ color }) => color === "gray" ? "lightgray" : "red"};
  z-Index: 15;
  color: #fff;
  border-radius: ${({radius})=> radius ? "5px": null};
  text-transform: inherit;
  padding: 10px;
  font-size: 1.1rem;
  border: none;
  outline: none;
  cursor: pointer;
  width:${({ wide }) => handlewidth(wide)}
`