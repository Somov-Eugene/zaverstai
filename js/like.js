(function () {
  let like = document.querySelector('.js-like');
  let likesNumber = like.querySelector('.js-like-counter');

  const clickHandler = function () {
    if (like.classList.contains('added')) {
      likesNumber.textContent--;
    } else {
      likesNumber.textContent++;
    }

    like.classList.toggle('added');
  };

  like.addEventListener('click', clickHandler);
})();
