
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.typing-animation');

  elements.forEach(element => {
    const originalHTML = element.innerHTML;
    const initialHeight = element.clientHeight;
    const typingSpeed = 100; // скорость набора текста в миллисекундах

    element.style.height = `${initialHeight}px`;
    element.innerHTML = ''; // Очистить содержимое перед началом анимации

    let currentIndex = 0;

    function typeWriter() {
      const textWithoutTags = originalHTML.replace(/<[^>]*>/g, ''); // Убираем все теги
      const displayHTML = originalHTML.substring(0, currentIndex + 1);
      element.innerHTML = displayHTML;

      currentIndex++;

      if (currentIndex < originalHTML.length) {
        // Проверяем, не находится ли текущий символ внутри тега
        while (originalHTML.charAt(currentIndex) === '<') {
          const endOfTag = originalHTML.indexOf('>', currentIndex);
          if (endOfTag === -1) break; // Некорректный HTML
          currentIndex = endOfTag + 1;
        }

        setTimeout(typeWriter, typingSpeed);
      }
    }

    typeWriter();
  });
});
