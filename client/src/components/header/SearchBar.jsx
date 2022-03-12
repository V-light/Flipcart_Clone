import SearchIcon from '@material-ui/icons/Search';
import { InputBase, styled} from '@material-ui/core';

const Search = styled("div")(({ theme }) => ({
  
  borderRadius: 2,
  backgroundColor: '#fff',
  marginLeft: 10,
  width: "38%",
  display: 'flex',
  color: 'black'
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: 5,
  height: "100%",
  display: "flex",
  color: 'blue'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontSize: 'unset',
  width: '100%',
  "& .MuiInputBase-input": {
    paddingLeft: 20,
  },
}));

const SearchBar = () => {
  return (
    <Search>
      <StyledInputBase
        placeholder="search for products , brand and more..."
        inputProps={{ "aria-label": "search" }}
      />

      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchBar;
