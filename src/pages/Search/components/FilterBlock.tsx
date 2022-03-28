import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import Select from "react-select";
import styled from "styled-components";
import { Button, Input } from "../../../components";
import {
  industryOptions,
  scopeOptions,
  goalsOptions,
  focusOptions,
  locationOptions,
  houseHoldOptions,
  ethnicityOptions,
} from "../../../helpers/const";

interface IFilterBlockProps {
  filterCompany: (key: string, value: string) => void;
}

export const FilterBlock: React.FC<IFilterBlockProps> = ({ filterCompany }) => {
  const [advancedOrCustomize, setAdvancedOrCustomize] = useState<
    "advanced" | "customize"
  >("advanced");
  const [gender, setGender] = useState<"male" | "female" | "both">("male");
  const [relation, setRelation] = useState<"single" | "married">("single");
  const [state, setState] = useState<number[]>([0, 100]);
  const [age, setAge] = useState<number[]>([18, 90]);

  const onSearchPressed = () => {};

  return (
    <Root>
      <Title>Filters</Title>
      <FilterTypes>
        <Button
          title={"Advanced"}
          type={"button"}
          bgColor={advancedOrCustomize === "advanced" ? "#D4F3FF" : "#f8f8f8"}
          color={"#122434"}
          paddingTop={"9px"}
          paddingBottom={"9px"}
          fsz={"12px"}
          fw={"400"}
          width={"50%"}
          handleClick={() => setAdvancedOrCustomize("advanced")}
        />
        <Button
          title={"Customize"}
          type={"button"}
          bgColor={advancedOrCustomize === "customize" ? "#D4F3FF" : "#f8f8f8"}
          color={"#122434"}
          paddingTop={"9px"}
          paddingBottom={"9px"}
          fsz={"12px"}
          fw={"400"}
          width={"50%"}
          handleClick={() => setAdvancedOrCustomize("customize")}
        />
      </FilterTypes>
      <SubTitle>Company</SubTitle>
      <FilterOptions>
        <Option>
          <Label>Industry</Label>
          <Select
            isMulti
            name="industry"
            options={industryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Search"
            onChange={(data: any) =>
              filterCompany(
                "industries",
                data.map((industry: { value: string }) => industry.value)
              )
            }
          />
        </Option>
        <Option>
          <Label>Geographic Location</Label>
          <Select
            isMulti
            name="geographic_location"
            options={locationOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Search"
          />
        </Option>
        <Option>
          <Label>Scope</Label>
          <Select
            name="scope"
            options={scopeOptions}
            defaultValue={scopeOptions[0]}
            className="basic-select"
            classNamePrefix="select"
            placeholder="Search"
            isSearchable={false}
          />
        </Option>
        <Option>
          <Label>SDG Goals</Label>
          <Select
            isMulti
            name="goals"
            options={goalsOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select"
            isSearchable={false}
          />
        </Option>
        <Option>
          <Label>CDR Focus</Label>
          <Select
            isMulti
            name="focus"
            options={focusOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select"
            isSearchable={false}
          />
        </Option>
        <Option>
          <Label>Total Annual Contributions</Label>
          <Input
            placeholder={"Enter total annual contributions"}
            type={"text"}
            name={"tac"}
            padding={"10px 32px 10px 10px"}
            color="hsl(0, 0%, 50%)"
          />
        </Option>
        <Option>
          <Label>Revenue</Label>
          <div
            style={{
              marginRight: "35px",
              marginLeft: "35px",
            }}
          >
            <Range
              values={state}
              step={1}
              min={0}
              max={100}
              onChange={(values) => {
                setState(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "2px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: state,
                        colors: ["#ccc", "#2BAEE0", "#ccc"],
                        min: 0,
                        max: 100,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "32px",
                    width: "72px",
                    borderRadius: "4px",
                    border: "1px solid #CAF0FF",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    outline: "none",
                  }}
                >
                  $ {state[index]} M
                </div>
              )}
            />
          </div>
        </Option>
      </FilterOptions>
      <SubTitle>Customer Demographics</SubTitle>
      <FilterOptions>
        <Option>
          <Label>Gender</Label>
          <FilterTypes>
            <Button
              title={"Male"}
              type={"button"}
              bgColor={gender === "male" ? "#D4F3FF" : "#f8f8f8"}
              color={"#122434"}
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setGender("male")}
            />
            <Button
              title={"Female"}
              type={"button"}
              bgColor={gender === "female" ? "#D4F3FF" : "#f8f8f8"}
              color={"#122434"}
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setGender("female")}
            />
            <Button
              title={"Both"}
              type={"button"}
              bgColor={gender === "both" ? "#D4F3FF" : "#f8f8f8"}
              color={"#122434"}
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setGender("both")}
            />
          </FilterTypes>
        </Option>
        <Option>
          <Label>Relations</Label>
          <FilterTypes>
            <Button
              title={"Single"}
              type={"button"}
              bgColor={relation === "single" ? "#D4F3FF" : "#f8f8f8"}
              color={"#122434"}
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setRelation("single")}
            />
            <Button
              title={"Married"}
              type={"button"}
              bgColor={relation === "married" ? "#D4F3FF" : "#f8f8f8"}
              color={"#122434"}
              paddingTop={"9px"}
              paddingBottom={"9px"}
              fsz={"12px"}
              fw={"400"}
              width={"50%"}
              handleClick={() => setRelation("married")}
            />
          </FilterTypes>
        </Option>
        <Option>
          <Label>Household Income</Label>
          <Select
            name="household-income"
            options={houseHoldOptions}
            className="basic-select"
            classNamePrefix="select"
            placeholder="Select"
            isSearchable={false}
          />
        </Option>
        <Option>
          <Label>Ethnicity</Label>
          <Select
            name="ethnicity"
            options={ethnicityOptions}
            className="basic-select"
            classNamePrefix="select"
            placeholder="Select"
            isSearchable={false}
          />
        </Option>
        <Option>
          <Label>Age</Label>
          <div
            style={{
              marginRight: "35px",
              marginLeft: "35px",
            }}
          >
            <Range
              values={age}
              step={1}
              min={18}
              max={90}
              onChange={(values) => {
                setAge(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "2px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: age,
                        colors: ["#ccc", "#2BAEE0", "#ccc"],
                        min: 18,
                        max: 90,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "32px",
                    width: "72px",
                    borderRadius: "4px",
                    border: "1px solid #CAF0FF",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    outline: "none",
                  }}
                >
                  {age[index]}
                </div>
              )}
            />
          </div>
        </Option>
      </FilterOptions>
      <Actions>
        <Button
          title={"Cancel"}
          type={"button"}
          bgColor={"white"}
          color={"#122434"}
          paddingTop={"12px"}
          paddingBottom={"12px"}
          fsz={"16px"}
          fw={"400"}
          width={"146px"}
          border={"1px solid #e8e8e8"}
          marginRight={"8px"}
        />
        <Button
          handleClick={onSearchPressed}
          title={"Search"}
          type={"button"}
          bgColor={"#2BAEE0"}
          color={"white"}
          paddingTop={"12px"}
          paddingBottom={"12px"}
          fsz={"16px"}
          fw={"400"}
          width={"146px"}
        />
      </Actions>
    </Root>
  );
};

const Root = styled.div`
  background: #fff;
  padding: 40px;
  margin-top: 29px;
  max-width: 1095px;
`;
const Title = styled.h2`
  color: #122434;
  font-size: 24px;
  line-height: 35px;
  font-weight: 500;
  margin-bottom: 16px;
`;
const FilterTypes = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 6px;
`;
const SubTitle = styled.h3`
  font-size: 16px;
  line-height: 23px;
  color: #122434;
  font-weight: 500;
  margin-top: 34px;
  margin-bottom: 16px;
`;
const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Option = styled.div`
  width: 49%;
  margin-bottom: 24px;
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const Label = styled.label`
  color: #737373;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  margin-bottom: 4px;
`;
const Actions = styled.div``;
