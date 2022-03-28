import React from "react";
import styled from "styled-components";
import { SvgDot, SvgLike } from "../../../assets/icons";
import { ImageNotFound } from "../../../assets/images";
import { Loader } from "../../../components";
import { ICompany } from "../../../types";

interface ICompaniesProps {
  companies: ICompany[];
  loading: boolean;
}

export const Companies: React.FC<ICompaniesProps> = ({
  companies,
  loading,
}) => {
  if (loading) {
    return <Loader />;
  }
  return (
    <Root>
      {companies.map((company) => (
        <Container key={company.id}>
          <Company>
            <LeftBlock>
              <CompanyLogoBlock>
                <CompanyLogo
                  src={company.logo || ImageNotFound}
                  alt="Company logo"
                />
              </CompanyLogoBlock>
              <CompanyRank>
                <GraySpan>Priority Ranking</GraySpan>
                <Title>12</Title>
              </CompanyRank>
            </LeftBlock>
            <RightBlock>
              <Description>
                <Block>
                  <Title>{company.name}</Title>
                  <GraySpan>
                    {company.street} {company.state} {company.zipCode}
                  </GraySpan>
                  <GraySpan>{company.phone}</GraySpan>
                </Block>
                <Wrapper>
                  <Focus>
                    <GraySpan>CSR Focus</GraySpan>
                    {company.crsFocus.length ? (
                      company.crsFocus.map((focus) => (
                        <FocusList>
                          <FocusItem>{focus}</FocusItem>
                        </FocusList>
                      ))
                    ) : (
                      <MDSpan>No information</MDSpan>
                    )}
                  </Focus>
                  <Revenue>
                    <GraySpan>Revenue</GraySpan>
                    <MDSpan>$ {company.revenue}</MDSpan>
                  </Revenue>
                </Wrapper>
              </Description>
              <Actions mobile={false}>
                <Button border="1px solid #e8e8e8" maxWidth="36px">
                  <SvgLike />
                </Button>
                <Button border="1px solid #2BAEE0" maxWidth="unset">
                  Profile
                </Button>
              </Actions>
            </RightBlock>
          </Company>
          <Actions mobile={true}>
            <Button border="1px solid #e8e8e8" maxWidth="36px">
              <SvgLike />
            </Button>
            <Button border="1px solid #2BAEE0" maxWidth="unset">
              Profile
            </Button>
          </Actions>
        </Container>
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1095px;
`;
const Container = styled.div`
  flex-direction: column;
  width: 49%;
  display: flex;
  background: #fff;
  margin-bottom: 24px;
  border-radius: 6px;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const Company = styled.div`
  padding: 26px 32px;
  display: flex;
  align-items: center;
  width: 100%;
  @media all and (max-width: 1055px) {
    padding: 24px 16px 0 16px;
  }
`;
const LeftBlock = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  max-width: 168px;
  width: 100%;
`;
const CompanyLogoBlock = styled.div`
  padding: 22px;
  min-height: 163px;
  max-height: 163px;
`;
const CompanyLogo = styled.img`
  object-fit: contain;
  width: 100%;
`;
const CompanyRank = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: center;
  border-top: 1px solid #e8e8e8;
`;
const GraySpan = styled.span`
  color: #737373;
  font-size: 12px;
  line-height: 18px;
`;
const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 16px;
  width: 100%;
  justify-content: space-between;
`;
const Description = styled.div`
  min-height: 163px;
  max-height: 163px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (max-width: 1055px) {
    max-height: unset;
  }
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 16px;
  line-height: 23.2px;
  font-weight: 500;
  justify-self: flex-start;
  margin-bottom: 12px;
`;
const Wrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #e8e8e8;
  @media all and (max-width: 1210px) {
    margin-top: 17px;
  }
  @media all and (max-width: 1055px) {
    border: none;
  }
`;
const Focus = styled.div`
  width: 55%;
  border-right: 1px solid #e8e8e8;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1055px) {
    width: 100%;
    border: none;
    padding-bottom: 25px;
  }
`;
const FocusList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Revenue = styled.div`
  width: 45%;
  padding-left: 20px;
  padding-bottom: 12px;
  text-align: right;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 1055px) {
    width: 100%;
    text-align: left;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-top: 5px;
  }
`;
const MDSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
`;
const FocusItem = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  margin-right: 8px;
  &::after {
    content: 1;
    margin-left: 8px;
  }
  &:last-child::after {
    content: none;
  }
`;

const Actions = styled.div<{ mobile: boolean }>`
  align-items: center;
  justify-content: space-between;
  display: ${(props) => (props.mobile ? "none" : "flex")};
  /* width: 100%; */
  @media all and (max-width: 1055px) {
    display: ${(props) => (props.mobile ? "flex" : "none")};
    width: 100%;
    padding: 16px 16px 24px 16px;
  }
`;
const Button = styled.button<{ border: string; maxWidth: string }>`
  background-color: transparent;
  border: ${(props) => props.border};
  border-radius: 6px;
  font-size: 12px;
  line-height: 18px;
  height: 36px;
  margin-right: 12px;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Image = styled.img``;
