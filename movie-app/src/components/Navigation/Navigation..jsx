import '../Navigation/Navigation.css'

function Navigation() {
  return (
    <nav role="navigation" className='navigation'>
      <div className='navigation__menu'>
        <input type="checkbox" className='navigation__checkbox' />
        <span className='navigation__toogle' ></span>
        <span className='navigation__toogle'></span>
        <span className='navigation__toogle'></span>
        <ul className='navigation__list'>
          <a className='navigation__link' href="#link"><li className='navigation__link-item'>Главная</li></a>
          <a className='navigation__link' href="#link"><li className='navigation__link-item'>Фильмы</li></a>
          <a className='navigation__link' href="#link"><li className='navigation__link-item'>Сохранённые фильмы</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
