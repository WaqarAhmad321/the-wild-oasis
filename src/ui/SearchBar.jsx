import { styled } from "styled-components";

const StyledInput = styled.input`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  color: white;
  font-family: "Poppins", sans-serif;

  font-size: 16px;
  padding: 10px;
  width: 100%;
  max-width: 200px;
  height: 45px;
  line-height: 30px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    background-color: #dadada;
    color: #a3a3a3;
  }

  &:read-only {
    background-color: #f4f4f4;
    color: #a3a3a3;
    cursor: not-allowed;
  }
`;
function SearchBar({ search, setSearch }) {
  return (
    <StyledInput
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      name="text"
      placeholder="Search"
    />
  );
}

export default SearchBar;
