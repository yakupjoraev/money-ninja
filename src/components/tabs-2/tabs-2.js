document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll('.product__btn');
  const tabContents = document.querySelectorAll('.product__content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех кнопок и контентов
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс active только той кнопке, на которую кликнули, и соответствующему контенту
      button.classList.add('active');
      const tabContentId = button.getAttribute('data-product-btn');
      const activeTabContent = document.querySelector(`[data-product-content="${tabContentId}"]`);
      activeTabContent.classList.add('active');
    });
  });
});