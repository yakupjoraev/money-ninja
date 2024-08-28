document.querySelectorAll('select').forEach(function (select) {
  var selectOptions = select.children.length;

  select.classList.add('hide-select');

  var customSelectContainer = document.createElement('div');
  customSelectContainer.classList.add('select');
  select.parentNode.insertBefore(customSelectContainer, select);
  customSelectContainer.appendChild(select);

  var customSelect = document.createElement('div');
  customSelect.classList.add('custom-select');
  customSelectContainer.appendChild(customSelect);
  customSelect.textContent = select.options[0].text;

  var optionList = document.createElement('ul');
  optionList.classList.add('select-options');
  customSelectContainer.appendChild(optionList);

  for (var i = 0; i < selectOptions; i++) {
    var optionListItem = document.createElement('li');
    optionListItem.textContent = select.options[i].text;
    optionListItem.setAttribute('rel', select.options[i].value);
    optionList.appendChild(optionListItem);
  }

  var optionListItems = optionList.children;

  customSelect.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('div.custom-select.active').forEach(function (el) {
      if (el !== customSelect) {
        el.classList.remove('active');
        el.nextElementSibling.style.display = 'none';
      }
    });
    customSelect.classList.toggle('active');
    customSelect.nextElementSibling.style.display = customSelect.classList.contains('active') ? 'block' : 'none';
  });

  optionList.addEventListener('click', function (e) {
    e.stopPropagation();
    customSelect.textContent = e.target.textContent;
    customSelect.classList.remove('active');
    select.value = e.target.getAttribute('rel');
    optionList.style.display = 'none';
  });

  document.addEventListener('click', function () {
    customSelect.classList.remove('active');
    optionList.style.display = 'none';
  });
});