import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { SvgLinkedin, SvgMap, SvgPhone, SvgWebsite } from "../../assets/icons";
import { ImageNotFound } from "../../assets/images";
import { Button, Container, Header, Navbar } from "../../components";
import { baseTheme } from "../../helpers/baseTheme";
import { useAppDispatch, useAppSelector } from "../../helpers/customHooks";
import { getCompany } from "../../store/actions";

export const CorparateProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { company } = useAppSelector((state) => state.company);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(getCompany(id));
    }
  }, [dispatch, id]);

  return (
    <Root>
      <Navbar />
      <Header title="Corparate Profile" goBack={true} />
      <Container>
        <CompanyShortDescription>
          <CompanyShortDescriptionLeft>
            <CompanyLogo src={company?.logo || ImageNotFound} />
            <div>
              <Title>{company?.name}</Title>
              <GrayTitle>
                Administration, Business Support and Waste Management Services
              </GrayTitle>
              {company?.socialMediaUrls && (
                <SocialNetworks>
                  <a href="#">
                    <SvgLinkedin />
                  </a>
                  <a href="#">
                    <SvgLinkedin />
                  </a>
                </SocialNetworks>
              )}
            </div>
          </CompanyShortDescriptionLeft>
          <Button
            title={"BLOCK"}
            type={"button"}
            bgColor={baseTheme.colors.white}
            color={baseTheme.colors.red}
            paddingTop={"9px"}
            paddingBottom={"9px"}
            fsz={"12px"}
            fw={"400"}
            width={"105px"}
            border={`1px solid ${baseTheme.colors.line}`}
          />
        </CompanyShortDescription>
        <Description>
          <DescriptionLeft>
            <Title>Business Description Products</Title>
            <SubTitle>Description</SubTitle>
            <Text>{company?.descriptionList}</Text>
            {company?.productsBrandDescription && (
              <>
                <SubTitle>Products {"&"} Brand Descriptions</SubTitle>
                <Text>{company?.productsBrandDescription}</Text>
              </>
            )}
            <SubTitle>Structure</SubTitle>
            <Text>Sole proprietorship</Text>
            <SubTitle>Reported</SubTitle>
            <Wrapper>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>Revenue Reported</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  $ {company?.revenue}
                </SubTitle>
              </BorderDiv>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>Employees Reported</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  {company?.employeeCount}
                </SubTitle>
              </BorderDiv>
            </Wrapper>
            <SubTitle>Company Ticker</SubTitle>
            <Wrapper>
              {company?.ticker ? (
                <BorderDiv textAlign="left" width="50%" padding="24px">
                  <Title>WMT</Title>
                  <GrayTitle>London Stock Exchange</GrayTitle>
                </BorderDiv>
              ) : (
                <BorderDiv textAlign="left" width="50%" padding="24px">
                  <Title>No information</Title>
                </BorderDiv>
              )}
            </Wrapper>
            <SubTitle>Company Contacts</SubTitle>
            <BorderDiv textAlign="center" width="100%" padding="21px 0">
              <Wrapper justifyContent="center" margin="0 0 16px 0">
                <Wrapper alignItems="center">
                  <SvgWebsite />
                  <a href={company?.website} target="_blank">
                    <BlackTitle margin="0 0 0 10px">
                      {company?.website}
                    </BlackTitle>
                  </a>
                </Wrapper>
                <Wrapper alignItems="center" margin="0 0 0 26px">
                  <SvgPhone />
                  <a href={`tel: ${company?.phone}`}>
                    <BlackTitle margin="0 0 0 10px">
                      {company?.phone}
                    </BlackTitle>
                  </a>
                </Wrapper>
              </Wrapper>
              <Wrapper alignItems="center" justifyContent="center">
                <SvgMap />
                <BlackTitle margin="0 0 0 10px">
                  {company?.street}, {company?.state} {company?.zipCode}
                </BlackTitle>
              </Wrapper>
            </BorderDiv>
            <Title>Social Impact</Title>
            <Wrapper justifyContent="space-between">
              <Div width="49%">
                <SubTitle>Type of Investment</SubTitle>
                <BorderDiv
                  padding="24px 24px 24px 44px"
                  textAlign="left"
                  width="100%"
                >
                  <List>
                    {company?.typesOfInvestment ? (
                      <>
                        <Item>
                          <Text>Grant</Text>
                        </Item>
                        <Item>
                          <Text>Employee Engagement</Text>
                        </Item>
                        <Item>
                          <Text>Cause Marketing</Text>
                        </Item>
                        <Item>
                          <Text>Sponsorship</Text>
                        </Item>
                      </>
                    ) : (
                      <Item>
                        <Text>No information</Text>
                      </Item>
                    )}
                  </List>
                </BorderDiv>
              </Div>
              <Div width="49%">
                <SubTitle>CRS Focus</SubTitle>
                <BorderDiv
                  padding="24px 24px 24px 44px"
                  textAlign="left"
                  width="100%"
                >
                  <List>
                    {company?.crsFocus.length ? (
                      <>
                        <Item>
                          <Text>Grant</Text>
                        </Item>
                        <Item>
                          <Text>Environment</Text>
                        </Item>
                        <Item>
                          <Text>Greening cities</Text>
                        </Item>
                        <Item>
                          <Text>Separate garbage collection</Text>
                        </Item>
                      </>
                    ) : (
                      <Item>
                        <Text>No information</Text>
                      </Item>
                    )}
                  </List>
                </BorderDiv>
              </Div>
            </Wrapper>
            <SubTitle>SDG Goal Alignment</SubTitle>
            <Wrapper>
              {company?.sdgGoals.length ? null : (
                <BorderDiv width="112px" padding="8px" textAlign="center">
                  <SubTitle>No selected goal</SubTitle>
                </BorderDiv>
              )}
            </Wrapper>
            <SubTitle>Contributions</SubTitle>
            <Wrapper>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>Cash Contributions</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  $ {company?.cashContributions || "-"}
                </SubTitle>
              </BorderDiv>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>Employee Contributions</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  $ {company?.employeeContributions || "-"}
                </SubTitle>
              </BorderDiv>
            </Wrapper>
            <Wrapper>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>Total Social Contributions</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  $ {company?.cashContributions || "-"}
                </SubTitle>
              </BorderDiv>
              <BorderDiv width="50%" textAlign="center" padding="16px 0">
                <GrayTitle>In-Kind Contributionss</GrayTitle>
                <SubTitle marginTop="4px" marginBottom="0">
                  $ {company?.inKindContributions || "-"}
                </SubTitle>
              </BorderDiv>
            </Wrapper>
            <SubTitle>Charitable partners</SubTitle>
            <BorderDiv
              width="100%"
              padding="24px 24px 24px 44px"
              textAlign="left"
            >
              {company?.charitablePartners.length ? (
                <Wrapper>
                  <Div width="50%">
                    <List>
                      <Item>
                        <Text>Wallmart</Text>
                      </Item>
                      <Item>
                        <Text>McDonald’s</Text>
                      </Item>
                      <Item>
                        <Text>Wendy's Company</Text>
                      </Item>
                    </List>
                  </Div>
                  <Div width="50%">
                    <List>
                      <Item>
                        <Text>Procter {"&"} Gamble</Text>
                      </Item>
                      <Item>
                        <Text>The Coca-Cola Company</Text>
                      </Item>
                      <Item>
                        <Text>Johnson {"&"} Johnson</Text>
                      </Item>
                    </List>
                  </Div>
                </Wrapper>
              ) : (
                <SubTitle>No information</SubTitle>
              )}
            </BorderDiv>
            <SubTitle>Partnership and Program Details</SubTitle>
            <CustomLink href={company?.website}>
              Go to the company's website
            </CustomLink>
            <Title>Customer Demographics</Title>
          </DescriptionLeft>
          <DescriptionRight></DescriptionRight>
        </Description>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  background: #f9f9f9;
  padding-bottom: 60px;
`;
const CompanyShortDescription = styled.div`
  background: #f2f2f2;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  max-width: 1096px;
  width: 100%;
`;
const CompanyShortDescriptionLeft = styled.div`
  display: flex;
`;
const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 24px;
`;
const Title = styled.h2`
  font-size: 24px;
  line-height: 35.52px;
  color: ${baseTheme.colors.black};
  font-weight: 500;
`;
const GrayTitle = styled.h5`
  color: ${baseTheme.colors.dark_gray};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;
const BlackTitle = styled.h5<{ margin?: string }>`
  color: ${baseTheme.colors.black};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  margin: ${(props) => props.margin || "unset"};
`;
const SocialNetworks = styled.div`
  a {
    margin-right: 12px;
  }
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${baseTheme.colors.white};
  padding: 40px 32px;
  max-width: 1096px;
  width: 100%;
`;
const DescriptionLeft = styled.div`
  width: 70%;
  border-right: 1px solid #ebebeb;
  padding-right: 40px;
`;
const DescriptionRight = styled.div`
  width: 30%;
`;
const SubTitle = styled.h3<{ marginTop?: string; marginBottom?: string }>`
  font-size: 16px;
  line-height: 23.2px;
  font-weight: 500;
  margin-top: ${(props) => props.marginTop || "24px"};
  margin-bottom: ${(props) => props.marginBottom || "16px"};
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24.8px;
  color: ${baseTheme.colors.black};
  font-weight: 400;
`;
const Wrapper = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  margin?: string;
}>`
  display: flex;
  align-items: ${(props) => props.alignItems || "unset"};
  justify-content: ${(props) => props.justifyContent || "unset"};
  margin: ${(props) => props.margin || "unset"};
`;
const BorderDiv = styled.div<{
  width: string;
  textAlign: string;
  padding: string;
}>`
  border: 1px solid ${baseTheme.colors.line};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  border-radius: 6px;
`;
const Div = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
const List = styled.ul`
  /* list-style: none; */
`;
const Item = styled.li`
  list-style-type: disc;
  &::marker {
    color: ${baseTheme.colors.blue};
  }
`;
const CustomLink = styled.a`
  color: ${baseTheme.colors.blue};
  font-size: 16px;
  line-height: 24.8px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 60px;
`;
