import Choices from 'choices.js';

Choices.use;

const el = document.querySelector('.hero-item__select');
const choices = new Choices(el, {
  searchEnabled: false,
});

// choices.use();

// const element = document.querySelector('.hero__item-select');
// const choices = new Choices(element, {
//   searchEnabled: false,
// });
