import { nanoid } from 'nanoid';
import css from './SearchBox.module.css';

const SearchBox = ({ onSearchContact, value }) => {
  const inputId = nanoid();
  return (
    <div className={css.searchContainer}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        id={inputId}
        type="text"
        name="search"
        onChange={onSearchContact}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
