(function () {
  let articles = document.querySelectorAll('.article-item');
  let filter = document.querySelector('.select-article');

  const changeHandler = function () {
    for (let article of articles) {
      if (article.dataset.category !== filter.value && filter.value !== 'all') {
        article.classList.add('hidden');
      } else {
        article.classList.remove('hidden');
      }
    }
  };

  filter.addEventListener('change', changeHandler);
})();
