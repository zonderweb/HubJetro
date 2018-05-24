// GAMBURGER MENU

$(function() {

	// Определение вызывающего элемента
  var getTriggerElement = function(el) {
    // Получаем атрибут `data-collapse`
    var isCollapse = el.getAttribute('data-collapse');
    // Если атрибут существует, то
    if (isCollapse !== null) {
      // Возвращаем элемент на котором осуществлен клик
      return el;
    } else {
      // Иначе пытаемся найти атрибут у его родителя
      var isParentCollapse = el.parentNode.getAttribute('data-collapse');
      // Возвращаем родительский элемент или undefined
      return (isParentCollapse !== null) ? el.parentNode : undefined;
    }
  };

  // Обработчик клика
  var collapseClickHandler = function(event) {
    // Определение вызывающего элемента
    var triggerEl = getTriggerElement(event.target);
    // Если у элемента и его родителя нет атрибута
    if (triggerEl === undefined) {
      // Отменяем действие
      return false;
    } else {
      event.preventDefault();
    }

    // Получаем целевой элемент
    var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
    // Если целевой элемент существует
    if (targetEl) {
      // Манипулируем классами
      triggerEl.classList.toggle('-active');
      targetEl.classList.toggle('-on');
    }
  };

  // Делегируем событие
  document.addEventListener('click', collapseClickHandler, false);

});
