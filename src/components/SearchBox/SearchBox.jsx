import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchbox}>
      <label className={s.textbox}>
        Search contacts by name
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name to search"
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
