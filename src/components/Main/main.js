import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import TogglePopUpTemplete from "./modal";
import {
  LoginBtn,
  MainWrapper,
  BtnWrapper,
  SigninBtn,
  MainTextWrapper,
  LogoWrapper,
} from "./styled";

const Main = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  return (
    <MainWrapper>
      <BtnWrapper>
        <LoginBtn
          onClick={() => {
            setLoginOpen(true);
          }}
        >
          로그인
        </LoginBtn>
        <SigninBtn
          onClick={() => {
            setRegOpen(true);
          }}
        >
          회원가입
        </SigninBtn>  

      </BtnWrapper>
      <MainTextWrapper>
        <strong>
          "<span className="orange">프로젝트</span>를 하고 싶으신가요?
          <br />
          <p>여기로 <span className="green">M</span><span className="purple">O</span><span className="orange">I</span>세요"</p>
        </strong>
      </MainTextWrapper>
      <div></div>
      {loginOpen ? (
        <TogglePopUpTemplete
          setLoginOpen={() => {
            setLoginOpen(false);
          }}
          isUser={true}
        />
      ) : null}
      {regOpen ? (
        <TogglePopUpTemplete
          setRegOpen={() => {
            setRegOpen(false);
          }}
          isUser={false}
        />
      ) : null}
    </MainWrapper>
  );
};

export default Main;