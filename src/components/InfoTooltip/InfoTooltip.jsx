import '../InfoTooltip/InfoTooltip.css';
import successIcon from '../../images/icon-success-status.png';
import errorIcon from '../../images/icon-error-status.png';

function InfoTooltip({ isOpen, onClose, isCorrectResponse, isError }) {
  return (
    <section
      className={`popup  ${isOpen ? 'popup_opened' : ''}`}
      aria-label="Уведомление о статусе в приложение">
      <div className="popup__container popup__container_login">
        <button type="button" className=" button button_type_close" onClick={onClose}></button>
        <img
          src={isCorrectResponse ? successIcon : errorIcon}
          alt={isCorrectResponse ? 'Успешно' : 'Ошибка, что то пошло не так'}
          className="popup__container_login-icon"
        />
        <h3 className="popup__container_login-title">
          {isCorrectResponse
            ? 'Успешно!'
            : `Что-то пошло не так! Попробуйте ещё раз.
            "${isError}" `}
        </h3>
      </div>
    </section>
  );
}

export default InfoTooltip;
