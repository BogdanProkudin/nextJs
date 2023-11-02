'use client';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import styles from '../app/profile/[username]/page.module.scss';
import { useEffect, useRef, useState } from 'react';
import { handleClickSlder } from '@/libs/Slider';
const MovieRow = () => {
  const [Movies, setMovies] = useState<object[]>([]);
  const [distance, setDistance] = useState(0);
  const movieRef = useRef<any>(null);
  const blockWidth = 288;
  const maxDistance = (Movies.length - 5) * blockWidth;
  function SliderClickNextMovie() {
    setDistance(maxDistance <= distance ? 0 : distance + 288);
    handleClickSlder('right', movieRef, Movies.length - 5, distance);
  }
  function SliderClickPrevMovie() {
    setDistance(distance <= 0 ? maxDistance : distance - 288);
    handleClickSlder('left', movieRef, Movies.length - 5, distance);
  }

  useEffect(() => {
    setMovies([...new Array(20)]);
  }, []);
  console.log(movieRef.current && movieRef.current.offsetWidth, distance, maxDistance);

  return (
    <div className={styles.MovieRowContainer}>
      <h1 style={{ color: 'yellow', fontSize: '18px' }}>Видео</h1>

      <div className={styles.MovieWrapper}>
        <div className={styles.MovieList} ref={movieRef}>
          {Movies.map((movie, index, array) => {
            return (
              <div key={index} className={styles.MovieItem}>
                {index}
              </div>
            );
          })}
        </div>
        <div className={styles.ArrowContainer}>
          <h1 onClick={() => SliderClickPrevMovie()} className={styles.ArrowPrev}>
            {<BsArrowLeftShort />}
          </h1>
          <h1 className={styles.ArrowNext} onClick={() => SliderClickNextMovie()}>
            {<BsArrowRightShort />}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
