import '../FilterCheckbox/FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="search-form__toogle">
      <p className="search-form__text">Короткометражки</p>
      <input class="search-form__checkbox" type="checkbox" id="switch" /><label class="search-form__label" for="switch"></label>
    </div>
  );
}

export default FilterCheckbox;
