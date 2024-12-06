import Button from './Button';
import styles from '../../../styles/euroBingo.module.css';

const ActiveButtons = ({ cardArray, buttonStates, handleClick }) => {
   

    return (
        <div className={styles.activeButtonsWrapper}>
            {buttonStates.map((isActive, index) => (
                <Button
                    key={index}
                    index={index}
                    isActive={isActive}
                    handleClick={() => handleClick(index)}
                    cliche={cardArray[index]}
                />
            ))}
        </div>
    );
}

export default ActiveButtons;