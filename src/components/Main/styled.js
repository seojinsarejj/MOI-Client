import Styled from "styled-components";
import People from "../../images/main.png";

export const MainWrapper = Styled.div`
      width: 100vw;
      height: 100vh;   
      background-image: url(${People});
      background-size: cover;
      display : flex;
      flex-direction : column;
      justify-content : space-between;
 `;

export const LogoWrapper = Styled.div`
      align-self : flex-start;
      img {
            margin : 3vh 0vw 0vh 2vw;
            width: 75px;
            height : 75px;
      }
`;

export const MainTextWrapper = Styled.div`
      display : block;
            margin: 5vh 0vw 0vh 10vw;
      strong {
            font-size: 3vw;
            color : #233863;
            font-weight: bold;
            span.orange {
                  color : #FA9746;
            }
            span.green {
                  color : #3ABF7C;
            }
            span.purple {
                  color : #A339FF;
            }
            p {
                  margin: 0vh 0vw 0vh 7vw;
            }
      }
`;

export const BtnWrapper = Styled.div`
      display:flex;
      justify-content: flex-end;
      align-items: baseline;
      margin-top : 20px;
      margin-right: 20px;
`;
export const LoginBtn = Styled.button`
      
      width: 200px;
      height: 60px;
      background: #FF9F03;
      border-radius: 10px;
      border : 0;
      outline:0;
      font-size: 23px;
      font-weight: 800;
      color:#ffffff;
      margin-right:10px;
`;

export const SigninBtn = Styled.button`
      
      width: 200px;
      height: 60px;
      background: #FF9F03;
      border-radius: 10px;
      border : 0;
      ouline : 0;
      font-size: 23px;
      font-weight: 800;
      color:#ffffff;
`;