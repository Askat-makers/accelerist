import React from "react";
import styled from "styled-components";
import { SvgArrowRight } from "../../assets/icons";
import { AltUserLogo, ImageNotFound, ProspectImage } from "../../assets/images";
import { Header, Navbar } from "../../components";
import { Container } from "../../components";
import { baseTheme } from "../../helpers/baseTheme";
import { useAppSelector } from "../../helpers/customHooks";

export const DashboardPage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  console.log(user);
  return (
    <>
      <Navbar />
      <Root>
        <Header title="Dashboard" />
        <Container>
          <Blocks width="100%">
            <Wrapper alignItems="center">
              <SubTitle>Prospecting Sessions</SubTitle>
              <More>see more</More>
            </Wrapper>
            <Wrapper>
              <Block width="49%">
                <BlockTitle>Race for the Cure</BlockTitle>
                <Hr />
                <GrayTitle>Filters</GrayTitle>
                <Filters>
                  <Filter>Travel Industry</Filter>
                  <Filter>$500-$1B</Filter>
                  <Filter>National</Filter>
                </Filters>
                <Wrapper>
                  <GrayBlock>
                    <GrayTitle>№ of Prospects Available</GrayTitle>
                    <Value>230</Value>
                  </GrayBlock>
                  <GrayBlock>
                    <GrayTitle>№ of Prospects Available</GrayTitle>
                    <Value>230</Value>
                  </GrayBlock>
                </Wrapper>
                <Wrapper>
                  <UserBlock>
                    <Image src={AltUserLogo} />
                    <div>
                      <Username>Jenny Wilson</Username>
                      <GrayTitle>Owner</GrayTitle>
                    </div>
                  </UserBlock>
                  <Activity>
                    <GrayTitle>Last activity</GrayTitle>
                    <Text>1 Jul 2020</Text>
                  </Activity>
                </Wrapper>
              </Block>
              <Block width="49%">
                <BlockTitle>Race for the Cure</BlockTitle>
                <Hr />
                <GrayTitle>Filters</GrayTitle>
                <Filters>
                  <Filter>Travel Industry</Filter>
                  <Filter>$500-$1B</Filter>
                  <Filter>National</Filter>
                </Filters>
                <Wrapper>
                  <GrayBlock>
                    <GrayTitle>№ of Prospects Available</GrayTitle>
                    <Value>230</Value>
                  </GrayBlock>
                  <GrayBlock>
                    <GrayTitle>№ of Prospects Available</GrayTitle>
                    <Value>230</Value>
                  </GrayBlock>
                </Wrapper>
                <Wrapper>
                  <UserBlock>
                    <Image src={AltUserLogo} />
                    <div>
                      <Username>Jenny Wilson</Username>
                      <GrayTitle>Owner</GrayTitle>
                    </div>
                  </UserBlock>
                  <Activity>
                    <GrayTitle>Last activity</GrayTitle>
                    <Text>1 Jul 2020</Text>
                  </Activity>
                </Wrapper>
              </Block>
            </Wrapper>
          </Blocks>
          <Wrapper>
            <Blocks width="49%">
              <Wrapper alignItems="center">
                <SubTitle>Favorites</SubTitle>
                <More>see more</More>
              </Wrapper>
              <Wrapper flexWrap="wrap">
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
                <Block width="49%" margin="0 0 15px 0">
                  <Wrapper alignItems="center" justifyContent="flex-start">
                    <CompanyLogo src={ImageNotFound} />
                    <CompanyValues>
                      <CompanyTitle>NASA</CompanyTitle>
                      <GrayTitle>Priority Ranking 12</GrayTitle>
                    </CompanyValues>
                  </Wrapper>
                  <Focus>
                    <GrayTitle>CSR Focus</GrayTitle>
                    <FocusList>
                      <FocusItem>Animals</FocusItem>
                      <FocusItem>Health</FocusItem>
                      <FocusItem>Education</FocusItem>
                    </FocusList>
                  </Focus>
                </Block>
              </Wrapper>
            </Blocks>
            <Blocks width="49%">
              <Wrapper alignItems="center">
                <SubTitle>Reports</SubTitle>
                <More>see more</More>
              </Wrapper>
              <Wrapper>
                <Block width="100%">
                  <Wrapper>
                    <Div width="49%">
                      <BlockTitle>Search Sessions</BlockTitle>
                      <GrayBlock width="100%" marginTop="16px">
                        <GrayTitle>Total</GrayTitle>
                        <Value>40</Value>
                      </GrayBlock>
                    </Div>
                    <Div width="49%">
                      <BlockTitle>Sent pitches</BlockTitle>
                      <GrayBlock width="100%" marginTop="16px">
                        <GrayTitle>Company</GrayTitle>
                        <Value>40</Value>
                      </GrayBlock>
                    </Div>
                  </Wrapper>
                  <Div width="100%">
                    <BlockTitle>Prospect Navigator</BlockTitle>
                    <GrayBlock padding="23px" width="100%" marginTop="16px">
                      <Wrapper alignItems="center">
                        <GoToPage>Go to page</GoToPage>
                        <SvgArrowRight />
                      </Wrapper>
                    </GrayBlock>
                  </Div>
                  <Div width="100%">
                    <BlockTitle>Last Login</BlockTitle>
                    <Wrapper alignItems="center">
                      <UserBlock>
                        <Image src={AltUserLogo} />
                        <div>
                          <Username>Jenny Wilson</Username>
                        </div>
                      </UserBlock>
                      <GrayTitle>12 Aug 2020</GrayTitle>
                    </Wrapper>
                    <Hr />
                    <Wrapper alignItems="center">
                      <UserBlock>
                        <Image src={AltUserLogo} />
                        <div>
                          <Username>Jenny Wilson</Username>
                        </div>
                      </UserBlock>
                      <GrayTitle>12 Aug 2020</GrayTitle>
                    </Wrapper>
                    <Hr />
                    <Wrapper alignItems="center">
                      <UserBlock>
                        <Image src={AltUserLogo} />
                        <div>
                          <Username>Jenny Wilson</Username>
                        </div>
                      </UserBlock>
                      <GrayTitle>12 Aug 2020</GrayTitle>
                    </Wrapper>
                  </Div>
                </Block>
              </Wrapper>
            </Blocks>
          </Wrapper>
          <Blocks width="100%" marginTop="16px" marginBottom="0">
            <Wrapper alignItems="center">
              <SubTitle>Prospect Navigator</SubTitle>
              <More>see more</More>
            </Wrapper>
            <Wrapper flexWrap="wrap">
              <ProspectNavigatorBlock>
                <ProspectNavigatorImage src={ProspectImage} />
                <BlockTitle>The Decline of Clothing Retail</BlockTitle>
                <Text>
                  The apparel industry’s appeal has been dwindling for a while:
                  “In 1977, clothing
                </Text>
                <GrayTitle>2 Sep 2020, 13:23</GrayTitle>
              </ProspectNavigatorBlock>
              <ProspectNavigatorBlock>
                <ProspectNavigatorImage src={ProspectImage} />
                <BlockTitle>The Decline of Clothing Retail</BlockTitle>
                <Text>
                  The apparel industry’s appeal has been dwindling for a while:
                  “In 1977, clothing
                </Text>
                <GrayTitle>2 Sep 2020, 13:23</GrayTitle>
              </ProspectNavigatorBlock>
              <ProspectNavigatorBlock>
                <ProspectNavigatorImage src={ProspectImage} />
                <BlockTitle>The Decline of Clothing Retail</BlockTitle>
                <Text>
                  The apparel industry’s appeal has been dwindling for a while:
                  “In 1977, clothing
                </Text>
                <GrayTitle>2 Sep 2020, 13:23</GrayTitle>
              </ProspectNavigatorBlock>
              <ProspectNavigatorBlock>
                <ProspectNavigatorImage src={ProspectImage} />
                <BlockTitle>The Decline of Clothing Retail</BlockTitle>
                <Text>
                  The apparel industry’s appeal has been dwindling for a while:
                  “In 1977, clothing
                </Text>
                <GrayTitle>2 Sep 2020, 13:23</GrayTitle>
              </ProspectNavigatorBlock>
            </Wrapper>
          </Blocks>
        </Container>
      </Root>
    </>
  );
};

const Root = styled.div`
  background: #f1f4f5;
`;

const Blocks = styled.div<{
  width: string;
  marginTop?: string;
  marginBottom?: string;
}>`
  margin-top: ${(props) => props.marginTop || "32px"};
  margin-bottom: ${(props) => props.marginBottom || "24px"};
  width: ${(props) => props.width};
`;
const SubTitle = styled.h3`
  color: ${baseTheme.colors.black};
  font-size: 24px;
  line-height: 35.5px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const Wrapper = styled.div<{
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "unset"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;
const Block = styled.div<{ width: string; margin?: string }>`
  padding: 24px;
  background-color: ${baseTheme.colors.white};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin || "unset"};
`;
const BlockTitle = styled.h4`
  font-size: 16px;
  line-height: 23.2px;
  font-weight: 500;
  color: ${baseTheme.colors.black};
`;
const Hr = styled.hr`
  background: ${baseTheme.colors.line};
  height: 1px;
  margin-top: 9px;
  margin-bottom: 16px;
  border: none;
`;
const GrayTitle = styled.h5`
  color: ${baseTheme.colors.dark_gray};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;
const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 24px;
`;
const Filter = styled.div`
  border: 1px solid ${baseTheme.colors.secondary_blue};
  border-radius: 6px;
  font-size: 12px;
  line-height: 18px;
  color: ${baseTheme.colors.black};
  padding: 6px 10px;
  margin-right: 8px;
`;
const GrayBlock = styled.div<{
  width?: string;
  marginTop?: string;
  padding?: string;
}>`
  padding: 5px 0;
  background-color: #f9f9f9;
  width: ${(props) => props.width || "49%"};
  text-align: center;
  border-radius: 4px;
  margin-bottom: 24px;
  margin-top: ${(props) => props.marginTop || "unset"};
  padding: ${(props) => props.padding || "unset"};
`;
const Value = styled.h6`
  font-size: 24px;
  line-height: 35px;
  font-weight: 500;
  margin-top: 8px;
`;
const UserBlock = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const Image = styled.img`
  margin-right: 8px;
  height: 100%;
`;
const Username = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: ${baseTheme.colors.black};
  font-weight: 500;
`;
const Activity = styled.div``;
const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${baseTheme.colors.black};
`;
const CompanyValues = styled.div``;
const CompanyTitle = styled.h3`
  font-size: 12px;
  line-height: 150%;
  color: ${baseTheme.colors.black};
  font-weight: 500;
`;

const CompanyLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin-right: 12px;
`;
const Focus = styled.div`
  margin-top: 20px;
`;
const FocusList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FocusItem = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  margin-right: 8px;
  &::after {
    content: "*";
    margin-left: 8px;
  }
  &:last-child::after {
    content: none;
  }
`;
const Div = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
const GoToPage = styled.span`
  color: ${baseTheme.colors.black};
  font-size: 18px;
  line-height: 24.8px;
  font-weight: 400;
`;
const ProspectNavigatorBlock = styled.div`
  max-width: 256px;
  width: 100%;
  margin-bottom: 25px;
`;
const ProspectNavigatorImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
`;
const More = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${baseTheme.colors.blue};
  margin-bottom: 16px;
  cursor: pointer;
`;
