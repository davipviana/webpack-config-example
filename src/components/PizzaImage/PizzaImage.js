import React from 'react';

import Pizza from '../../assets/pizza.jpg';

import styles from './PizzaImage.css';

const PizzaImage = (props) => (
  <div className={styles.PizzaImage}>
    <img src={Pizza} className={styles.PizzaImg} />
  </div>
);

export default PizzaImage;