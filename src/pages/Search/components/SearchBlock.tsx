import React from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { SvgFilter, SvgSearch } from "../../../assets/icons";
import { Input } from "../../../components";
import { baseTheme } from "../../../helpers/baseTheme";

interface ISearchBlock {
  searchValue: string;
  filterCompany: (key: string, value: string) => void;
  setIsFilter: () => void;
}

export const SearchBlock: React.FC<ISearchBlock> = ({
  searchValue,
  filterCompany,
  setIsFilter,
}) => {
  return (
    <Root>
      <Form
        onSubmit={(data) => filterCompany("q", data.search)}
        initialValues={{ search: searchValue }}
        render={({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            <Field
              name="search"
              render={({ input }) => (
                <Input
                  {...input}
                  placeholder={"Enter name"}
                  type={"text"}
                  name={"search"}
                  padding={"9px 24px"}
                  backgroundColor={"#F1F4F5"}
                  maxWidth={"715px"}
                  minWidth={"343px"}
                  color={baseTheme.colors.dark_gray}
                  border={"none"}
                />
              )}
            />
            <Button type="submit">
              <SvgSearch />
            </Button>
            <Button type="button" onClick={setIsFilter}>
              <SvgFilter />
            </Button>
          </CustomForm>
        )}
      />
    </Root>
  );
};

const Root = styled.div`
  max-width: 715px;
  width: 100%;
  display: flex;
  align-items: center;
  @media all and (max-width: 575px) {
    margin-top: 10px;
  }
`;
const CustomForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  margin-left: -37px;
  margin-right: -12px;
  font-size: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
