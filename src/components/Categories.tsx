'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../app/profile/[username]/page.module.scss';
const Categories = () => {
  const categories = ['Главная', 'Комментарии', 'Подборки'];
  const [isActiveCategory, setIsActiveCategory] = useState(0);

  function setActiveSpan(i: number) {
    setIsActiveCategory(i);
  }

  return (
    <div className={styles.CategoriesContainer}>
      <div className={styles.CategoriesWrapper}>
        {categories.map((categoryName: string, i) => {
          return (
            <div key={categoryName}>
              <span
                onClick={() => setActiveSpan(i)}
                style={{
                  background: isActiveCategory === i ? 'white' : '',
                  borderRadius: '100px',
                  padding: '7px',
                  cursor: 'pointer',
                  color: isActiveCategory === i ? 'black' : 'grey'
                }}
              >
                {categoryName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
