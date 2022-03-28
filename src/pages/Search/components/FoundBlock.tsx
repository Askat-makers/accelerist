import React from "react";
import styled from "styled-components";
import {
  SvgArrowLeft,
  SvgArrowRight,
  SvgFolderPlus,
  SvgMail,
  SvgUpload,
} from "../../../assets/icons";

interface IFoundBlockProps {
  page: string;
  companiesCount: number;
  paginate: (key: string, value: string) => void;
}

export const FoundBlock: React.FC<IFoundBlockProps> = ({
  page,
  companiesCount,
  paginate,
}) => {
  const getPaginationInfo = (page: string, companiesCount: number) => {
    let second: number = 12 * +page;
    let first: number = second - 12 + 1;
    if (companiesCount === 0) {
      return `${companiesCount}-${companiesCount} of ${companiesCount}`;
    }
    if (second > companiesCount) {
      return `${first}-${companiesCount} of ${companiesCount}`;
    }
    return `${first}-${second} of ${companiesCount}`;
  };

  return (
    <Root>
      <Title>Found {companiesCount} companies</Title>
      <Wrapper>
        <Actions>
          <Action>
            <SvgFolderPlus />
            <ActionText>Save List</ActionText>
          </Action>
          <Action>
            <SvgUpload />
            <ActionText>Save List</ActionText>
          </Action>
          <Action>
            <SvgMail />
            <ActionText>Save List</ActionText>
          </Action>
        </Actions>
        <Pagination>
          <span onClick={() => paginate("page", (+page - 1).toString())}>
            <SvgArrowLeft />
          </span>
          <Page>{getPaginationInfo(page, companiesCount)}</Page>
          <span onClick={() => paginate("page", (+page + 1).toString())}>
            <SvgArrowRight />
          </span>
        </Pagination>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  padding-top: 32px;
  max-width: 1095px;
`;
const Title = styled.h2`
  font-size: 16px;
  line-height: 23.2px;
  font-weight: 500;
  color: #122434;
  margin-bottom: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 27px;
`;
const Actions = styled.div`
  display: flex;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
  cursor: pointer;
`;
const ActionText = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #122434;
  margin-left: 8px;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 768px) {
    position: absolute;
    bottom: 27px;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const Page = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #122434;
  margin-left: 19px;
  margin-right: 19px;
`;
