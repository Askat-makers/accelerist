import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { SvgEyeSlash } from "../../../assets/icons";
import { Button, ErrorSpan, Input } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../helpers/customHooks";
import { signUp } from "../../../store/actions/AuthenticationActions";
import { ICandidateUser } from "../../../types";

const formInitState: ICandidateUser = {
  email: "",
  password: "",
};

export const Register: React.FC = () => {
  const [isTypePassword, setIsTypePassword] = useState<boolean>(true);
  const { error, loading } = useAppSelector((state) => state.auth);

  const required = (value: string) => (value ? undefined : "Required");
  const dispatch = useAppDispatch();

  const handleSubmit = (user: ICandidateUser) => {
    dispatch(signUp(user));
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
              <Label>Email</Label>
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
              <Label>Password</Label>
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
                        {isTypePassword ? <SvgEyeSlash /> : <SvgEyeSlash />}
                      </InputTypeSwitch>
                      {meta.error && meta.touched && (
                        <ErrorSpan title={meta.error} />
                      )}
                    </>
                  )}
                />
              </div>
            </InputWrapper>
            <TermsOfService>
              I agree that by clicking{" "}
              <a href="https://google.com">
                <b>“Registration”</b>{" "}
              </a>{" "}
              I accept the Terms Of <br /> Service and Privacy Policy
            </TermsOfService>
            <Button
              title="Registration"
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
const Label = styled.label`
  color: #737373;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
`;
const InputTypeSwitch = styled.span`
  margin-left: -30px;
  cursor: pointer;
`;
const TermsOfService = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #737373;
  padding: 5px;
`;
