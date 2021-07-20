import React, { FC } from "react";
import { debounce } from "../../utils/debounce";
import { COLORS } from "../../styles/CONSTANTS";
import { ErrorFallback } from "../ErrorFallback/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import Icon from "./Icon";
import styled from "styled-components/macro";

interface ResultObject {
  name: string;
}

interface ResultArray extends Array<ResultObject> {}

const TypeAheadSearch: FC<{ fetcher: Function; icon: string }> = ({
  fetcher,
  icon,
}) => {
  const [nameString, setNameString] = React.useState("");
  const [results, setResults] = React.useState<ResultArray>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameString(e.target.value);
    if (e.target.value.length >= 3) {
      return debounce(handleSearch(), 350);
    } else if (e.target.value === "") {
      return setResults([]);
    }
  }

  function handleSearch() {
    const encodedQueryString = encodeURIComponent(nameString);
    fetcher(encodedQueryString)
      .then((data: { json: Function }) => data.json())
      .then((res: ResultArray) => {
        return setResults(res);
      })
      .catch((err: Error) => {
        throw new Error(`Sorry, something went wrong: ${err.message}`);
      });
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        setResults([]);
      }}
    >
      <Wrapper>
        <label aria-label="camp-site-search">Find a camp site</label>
        <form name="camp-site-search" onSubmit={() => handleSearch()}>
          <SearchInput
            value={nameString}
            onChange={(e) => handleChange(e)}
            placeholder={"Moon river"}
          ></SearchInput>
        </form>

        <ResultsDropDown>
          {results.map((datum: ResultObject) => {
            return (
              <SingleResultWrapper>
                <ResultIcon>
                  <Icon id={icon} size={24}></Icon>
                </ResultIcon>
                <SingleResult>{datum.name}</SingleResult>
              </SingleResultWrapper>
            );
          })}
        </ResultsDropDown>
      </Wrapper>
    </ErrorBoundary>
  );
};

export default TypeAheadSearch;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  margin-top: 5px;
  font-size: 1rem;
  padding: 4px 8px;
  border-radius: 5px;
`;

const ResultsDropDown = styled.ul`
  position: absolute;
  top: 60px;
  left: -48px;
`;

const SingleResultWrapper = styled.div`
  width: 400px;
  padding: 8px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLORS.gray[100]};
  }
`;

const ResultIcon = styled.span`
  align-items: center;

  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
  width: 2rem;
`;

const SingleResult = styled.li`
  list-style: none;
`;
