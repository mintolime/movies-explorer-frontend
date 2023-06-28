import '../FilterCheckbox/FilterCheckbox.css'

function FilterCheckbox({onChangeFilter}) {
  return (
    <div className="search-form__toogle">
      <p className="search-form__text">Короткометражки</p>
      <input className="search-form__checkbox" type="checkbox" id="switch" onChange={onChangeFilter} />
      <label className="search-form__label" htmlFor="switch"></label>
    </div>
  );
}

export default FilterCheckbox;
