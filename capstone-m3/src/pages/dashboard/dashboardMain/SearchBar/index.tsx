import { StyledSearchBar } from "./style";

function SearchBar() {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Digitar Pesquisa" />
      <button type="submit"></button>
    </StyledSearchBar>
  );
}

export default SearchBar;
