import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components";
import { Container } from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../helpers/customHooks";
import { getCompanies } from "../../store/actions";
import { IFilter } from "../../types";
import { Companies, FilterBlock, FoundBlock, SearchBlock } from "./components";

export const SearchPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let search = new URLSearchParams(location.search);
  const { error, loading, companies, companiesCount } = useAppSelector(
    (state) => state.company
  );
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({
    page: search.get("page") || "1",
    q: search.get("q") || "",
    industries: [],
  });

  const filterCompany = (key: string, value: string) => {
    if (!value || !value.length) {
      search.delete(key);
      setFilter({ ...filter, [key]: "" });
      navigate(`${location.pathname}?${search.toString()}`);
      return;
    }
    if (key !== "page") {
      setFilter((filter) => ({ ...filter, page: "1" }));
      search.set("page", "1");
    }
    search.set(key, value);
    setFilter((filter) => ({ ...filter, [key]: value }));
    navigate(`${location.pathname}?${search.toString()}`);
  };

  useEffect(() => {
    dispatch(getCompanies({ ...filter }));
  }, [dispatch, filter]);

  useEffect(() => {
    search.set("page", filter.page);
    navigate(`${location.pathname}?${search.toString()}`);
  }, []);
  return (
    <>
      <Navbar />
      <Root>
        <Header>
          <Container>
            <Wrapper>
              <Title>Search</Title>
              <SearchBlock
                searchValue={filter.q}
                filterCompany={filterCompany}
                setIsFilter={() => setIsFilter((isFilter) => !isFilter)}
              />
            </Wrapper>
          </Container>
        </Header>
        <Container>
          {isFilter && <FilterBlock filterCompany={filterCompany} />}
          <FoundBlock
            page={filter.page}
            companiesCount={companiesCount}
            paginate={filterCompany}
          />
          {companies && <Companies companies={companies} loading={loading} />}
        </Container>
      </Root>
    </>
  );
};

const Root = styled.div`
  background: #f1f4f5;
  @media all and (max-width: 768px) {
    position: relative;
    padding-bottom: 55px;
  }
`;
const Header = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  background: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 575px) {
    flex-wrap: wrap;
  }
`;
const Title = styled.h2`
  color: #122434;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  margin-right: 82px;
  @media all and (max-width: 575px) {
    font-size: 16px;
    line-height: 23.2px;
  }
`;
