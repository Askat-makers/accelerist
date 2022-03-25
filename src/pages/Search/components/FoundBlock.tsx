import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { FolderPlusIcon, MailIcon, UploadIcon } from "../../../assets/images";

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
            <ActionImage src={FolderPlusIcon} alt="folder icon" />
            <ActionText>Save List</ActionText>
          </Action>
          <Action>
            <ActionImage src={UploadIcon} alt="upload icon" />
            <ActionText>Save List</ActionText>
          </Action>
          <Action>
            <ActionImage src={MailIcon} alt="mail icon" />
            <ActionText>Save List</ActionText>
          </Action>
        </Actions>
        <Pagination>
          <ArrowIcon
            icon={faChevronLeft}
            onClick={() => paginate("page", (+page - 1).toString())}
          />
          <Page>{getPaginationInfo(page, companiesCount)}</Page>
          <ArrowIcon
            icon={faChevronRight}
            onClick={() => paginate("page", (+page + 1).toString())}
          />
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
const ActionImage = styled.img`
  margin-right: 9px;
`;
const ActionText = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #122434;
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
const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  cursor: pointer;
`;
const Page = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #122434;
  margin-left: 19px;
  margin-right: 19px;
`;
