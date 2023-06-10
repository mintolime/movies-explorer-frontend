import '../Button/Button.css'

function Button({ btnClass, btnType, btnText }) {
  return (
    <button
      className={`button ${btnClass}`}
      type={btnType}>{btnText}</button>
  );
}

export default Button;
