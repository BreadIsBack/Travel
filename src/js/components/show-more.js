const showMore = document.querySelector('.choose__btn');
const cardsLength = document.querySelectorAll('.choose__item').length;
let items = 3;

showMore.addEventListener('click', () => {
  items += 3;
  const array = Array.from(document.querySelector('.choose__list').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-shown'));

  if (visItems.length === cardsLength) {
    showMore.style.cursor = 'not-allowed';
    showMore.disabled = true;
  }
});
