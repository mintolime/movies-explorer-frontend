import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox({ isChecked, onCheck }) {
  return (
    <div className="search-form__toogle">
      <p className="search-form__text">Короткометражки</p>
      <input
        className="search-form__checkbox"
        type="checkbox"
        id="switch"
        onChange={onCheck}
        checked={isChecked || ''}
      />
      <label className="search-form__label" htmlFor="switch"></label>
    </div>
  );
}

export default FilterCheckbox;
