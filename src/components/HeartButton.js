// 보류

import styled from "styled-components";
import {emptyheart} from "./public/emptyheart.png";
import {fullheart} from "./public/fullheart.png";

const Heart = styled.img`
  //css
  }
`

const HeartButton = ({like,onClick}) => {
  return(
    <Heart src = {like? {fullheart} : {emptyheart}} onClick = {onClick}/>
  )
}

export default HeartButton;