
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.typing-animation');

  const observerOptions = {
    root: null, // Будет наблюдать за пересечением с viewport
    rootMargin: '0px',
    threshold: 0.1 // Запускать анимацию, когда элемент виден на 10%
  };

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        startTypingAnimation(element);
        observer.unobserve(element); // Прекращаем наблюдение после запуска анимации
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });

  function startTypingAnimation(element) {
    const originalHTML = element.innerHTML;
    const initialHeight = element.clientHeight;
    const typingSpeed = 100; // скорость набора текста в миллисекундах

    element.style.height = `${initialHeight}px`;
    element.innerHTML = ''; // Очистить содержимое перед началом анимации

    let currentIndex = 0;

    function typeWriter() {
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
  }
});
