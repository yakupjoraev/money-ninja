document.querySelectorAll('.custom-select').forEach(select => {
  const trigger = select.querySelector('.custom-select-trigger');
  const options = select.querySelector('.custom-options');

  trigger.addEventListener('click', () => {
    options.classList.toggle('open');
  });

  select.querySelectorAll('.custom-option').forEach(option => {
    option.addEventListener('click', () => {
      trigger.textContent = option.textContent;
      select.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      options.classList.remove('open');
    });
  });

  window.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      options.classList.remove('open');
    }
  });
});
