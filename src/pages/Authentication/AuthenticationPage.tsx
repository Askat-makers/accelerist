import React, { useState } from "react";
import styled from "styled-components";
import {
  AuthenticationBlock,
  AuthenticationLayout,
  Button,
} from "../../components";
import { baseTheme } from "../../helpers/baseTheme";
import { Login, Register, LoginWithLinkedin } from "./components";

export const AuthenticationPage = () => {
  const [registerOrLogin, setRegisterOrLogin] = useState<"register" | "login">(
    "register"
  );
  return (
    <>
      <AuthenticationLayout>
        <AuthenticationBlock
          title="Welcome to Accelerist"
          titleMarginBottom={25}
        >
          <Switch>
            <Button
              title={"Register"}
              type={"button"}
              bgColor={
                registerOrLogin === "register" ? "#caf0ff" : "transparent"
              }
              color={
                registerOrLogin === "register"
                  ? baseTheme.colors.black
                  : baseTheme.colors.dark_gray
              }
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setRegisterOrLogin("register")}
            />
            <Button
              title={"Login"}
              type={"button"}
              bgColor={registerOrLogin === "login" ? "#caf0ff" : "transparent"}
              color={
                registerOrLogin === "login"
                  ? baseTheme.colors.black
                  : baseTheme.colors.dark_gray
              }
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setRegisterOrLogin("login")}
            />
          </Switch>
          {registerOrLogin === "register" ? <Register /> : <Login />}
          <LoginWithLinkedin />
        </AuthenticationBlock>
      </AuthenticationLayout>
    </>
  );
};

const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;
