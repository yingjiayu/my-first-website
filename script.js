//drop down section in product list's filters
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
dropdownSection('.shop-dropdown', '.nav-item-left-shop');
dropdownSection('.filter-sortby', '.filter-sortby-title');
dropdownSection('.filter-collection', '.filter-collection-title');
dropdownSection('.product-description-one', '.product-description-trigger');
dropdownSection('.product-description-two', '.product-description-trigger-two');
dropdownSection('.product-description-three', '.product-description-trigger-three');