function dropdownSection(whichSection, triggerPart) {
  const box = document.querySelector(whichSection);
  const trigger = document.querySelector(triggerPart);
  if (!box || !trigger) return;
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    box.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!box.contains(e.target)) {
      box.classList.remove('active');
    }
  });
}

// 初始化所有 dropdown

dropdownSection('.filter-sortby', '.filter-sortby-title');

dropdownSection('.filter-collection', '.filter-collection-title');
