export const handleClickSlder = (
  direction: string,
  MovieRef: any,
  MoviesLength: number,
  distance: number
) => {
  const filmWidth = 278; // Ширина одного фильма
  const marginBetweenFilms = 10; // Отступ между фильмами

  if (MovieRef.current) {
    const maxScrollLeft =
      MovieRef.current.scrollWidth -
      MovieRef.current.offsetWidth -
      parseInt(window.getComputedStyle(MovieRef.current).marginLeft) +
      parseInt(window.getComputedStyle(MovieRef.current).marginRight);

    let newTranslateX;
    const currentTranslateX =
      parseInt(MovieRef.current.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    newTranslateX = currentTranslateX - filmWidth - marginBetweenFilms;

    if (direction === 'left' && distance > 0) {
      MovieRef.current.style.transform = `translateX(${
        currentTranslateX + filmWidth - marginBetweenFilms - marginBetweenFilms + 30
      }px)`;
    }

    if (direction === 'right' && MovieRef.current) {
      distance += filmWidth + marginBetweenFilms;
      newTranslateX = currentTranslateX - filmWidth + marginBetweenFilms + marginBetweenFilms;
      MovieRef.current.style.transform = `translateX(${newTranslateX - 30}px)`;
    }

    if (direction === 'right' && distance > MoviesLength * 288) {
      MovieRef.current.style.transform = `translateX(${0}px)`;
    }
    if (direction === 'left' && distance <= 0) {
      MovieRef.current.style.transform = `translateX(${-MoviesLength * 288}px)`;
    }
  }
};
