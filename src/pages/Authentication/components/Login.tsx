import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ErrorSpan, Input } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../helpers/customHooks";
import { signIn } from "../../../store/actions/AuthenticationActions";
import { ICandidateUser } from "../../../types";

const formInitState: ICandidateUser = {
  email: "",
  password: "",
};

export const Login: React.FC = () => {
  const [isTypePassword, setIsTypePassword] = useState<boolean>(true);
  const { error, loading } = useAppSelector((state) => state.auth);

  const required = (value: string) => (value ? undefined : "Required");
  const dispatch = useAppDispatch();

  const handleSubmit = (user: ICandidateUser) => {
    dispatch(signIn(user));
  };

  return (
    <>
      {error && <ErrorText>{error}</ErrorText>}
      <Form
        onSubmit={handleSubmit}
        initialValues={formInitState}
        render={({ handleSubmit, hasValidationErrors }) => (
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label color="#737373" marginLeft="0" marginBottom="4px">
                Email
              </Label>
              <Field
                name="email"
                validate={required}
                render={({ input, meta }) => (
                  <>
                    <Input
                      {...input}
                      placeholder="Enter email"
                      type="text"
                      padding="10px 32px 10px 16px"
                    />
                    {meta.error && meta.touched && (
                      <ErrorSpan title={meta.error} />
                    )}
                  </>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <Label color="#737373" marginLeft="0" marginBottom="4px">
                Password
              </Label>
              <div>
                <Field
                  name="password"
                  validate={required}
                  render={({ input, meta }) => (
                    <>
                      <Input
                        {...input}
                        placeholder="Enter password"
                        type={isTypePassword ? "password" : "text"}
                        padding="10px 32px 10px 16px"
                      />
                      <InputTypeSwitch
                        onClick={() =>
                          setIsTypePassword((prevState) => !prevState)
                        }
                      >
                        <FontAwesomeIcon
                          icon={isTypePassword ? faEyeSlash : faEye}
                        />
                      </InputTypeSwitch>
                      {meta.error && meta.touched && (
                        <ErrorSpan title={meta.error} />
                      )}
                    </>
                  )}
                />
              </div>
            </InputWrapper>
            <LoginSettings>
              <Wrapper>
                <Checkbox type={"checkbox"} />
                <Label color="#122434" marginLeft="11px">
                  Remember
                </Label>
              </Wrapper>
              <StyledLink to="#">Forgot Password</StyledLink>
            </LoginSettings>
            <Button
              title="Login"
              type="submit"
              isDisabled={hasValidationErrors}
              isLoading={loading}
              bgColor="#2BAEE0"
              color="#fff"
              paddingTop="12px"
              paddingBottom="12px"
              fsz="16px"
              fw="500"
              width="100%"
            />
          </form>
        )}
      />
    </>
  );
};
const ErrorText = styled.p`
  color: red;
  font-size: 18px;
  text-align: left;
  margin-bottom: 10px;
`;
const InputWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label<{
  color: string;
  marginBottom?: string;
  marginLeft?: string;
}>`
  color: ${(props) => props.color};
  font-size: 12px;
  line-height: 18px;
  margin-bottom: ${(props) => props.marginBottom || "unset"};
  margin-left: ${(props) => props.marginLeft || "unset"};
`;
const InputTypeSwitch = styled.span`
  margin-left: -30px;
  cursor: pointer;
`;

const LoginSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 62px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input``;
const StyledLink = styled(Link)`
  color: #737373;
  font-size: 12px;
  line-height: 18px;
`;
