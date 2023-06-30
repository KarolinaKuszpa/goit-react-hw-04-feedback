import React, { useState, useEffect } from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [buttonStyles, setButtonStyles] = useState({});

  useEffect(() => {
    const stylesMap = {
      good: styles.buttonGood,
      neutral: styles.buttonNeutral,
      bad: styles.buttonBad,
    };

    const updatedButtonStyles = options.reduce((acc, option) => {
      acc[option] = stylesMap[option] || styles.button;
      return acc;
    }, {});

    setButtonStyles(updatedButtonStyles);
  }, [options]);

  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option}
          className={`${styles.button} ${buttonStyles[option]}`}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
