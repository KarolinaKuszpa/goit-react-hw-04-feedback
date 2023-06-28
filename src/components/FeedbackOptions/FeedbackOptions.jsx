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
    //Wykorzystujemy metodę reduce na tablicy options, aby stworzyć obiekt updatedButtonStyles. reduce jest funkcją, która przekształca tablicę do jednej wartości.
    //W naszym przypadku, zaczynając od pustego obiektu {}, dla każdej wartości option w tablicy options, dodajemy klucz do obiektu acc o wartości option,
    //pobierając odpowiednią klasę stylu z stylesMap. Jeśli dla danej wartości option nie ma zdefiniowanej klasy stylu, przypisujemy domyślną klasę styles.button.
    const updatedButtonStyles = options.reduce((acc, option) => {
      //StylesMap to obiekt, w którym klucze odpowiadają wartościom z options, a wartości to klasy stylów CSS zdefiniowane w FeedbackOptions.module.css.
      //Na podstawie wartości options tworzymy obiekt updatedButtonStyles, który zawiera klasy stylów dla poszczególnych przycisków.
      //Domyślnie używamy klasy styles.button dla przycisków, które nie mają przypisanej konkretnej wartości w stylesMap.
      //acc[option]-akumulator przecowujący wartość wynikową iteracji po tablicy, acc jest obiektem, do któreo dodaję właściwość o nazwie option i przypisujemy jej wartość.
      //stylesMap[option] - pobiera wartość z obiektu stylesMap na podstawie klucza option. Jeśli klucz istnieje w stylesMap, to otrzymamy odpowiadającą mu wartość, która jest klasą stylu CSS.
      //styles.button - jest domyślną klasą stylu CSS, która zostanie przypisana do option, jeśli nie ma odpowiedniego klucza w stylesMap.
      //Cała linia kodu przypisuje wartość do właściwości option w obiekcie acc. W rezultacie, podczas iteracji po options, tworzymy obiekt updatedButtonStyles,
      //w którym klucze odpowiadają wartościom z options, a wartości to klasy stylów CSS.
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

//Notification: Ten komponent jest prostym funkcjonalnym komponentem, który przyjmuje prop message i renderuje go jako paragraf. Nie ma potrzeby przechowywania stanu ani wykonywania efektów ubocznych, ponieważ jest to komponent statyczny.

//Section: Ten komponent również jest prostym funkcjonalnym komponentem. Przyjmuje propy title i children (inne komponenty lub elementy JSX) i renderuje je wewnątrz kontenera <div>. Podobnie jak w przypadku Notification, nie ma potrzeby używania hooków useState i useEffect, ponieważ nie ma logiki związanej ze stanem ani efektami ubocznymi.

//Statistics: Ten komponent przyjmuje propsy z wartościami statystyk (takich jak good, neutral, bad, itd.) i renderuje je jako paragrafy. Podobnie jak w przypadku poprzednich komponentów, nie ma potrzeby przechowywania stanu ani wykonywania efektów ubocznych.
