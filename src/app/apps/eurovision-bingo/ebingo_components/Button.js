import styles from '../../../styles/euroBingo.module.css';

const Button = ({ index, isActive, handleClick, cliche}) => {
  return (
    <div className={`${styles.gridItem} ${isActive ? styles.gridItemActive : ''}`}>
          <button
              onClick={handleClick}
              className={`${styles.euroBtn} ${index + 1} ${isActive ? styles.Active : ''}`}
              type="button"
              data-testid="card-button"
          >
              {cliche}
          </button>
      </div>
  );
}

export default Button;