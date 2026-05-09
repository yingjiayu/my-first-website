//drop down part in product list's filters
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
dropdownSection('.filter-sortby', '.filter-sortby-title');
dropdownSection('.filter-collection', '.filter-collection-title');



function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
function renderBreadcrumb(collectionName = null) {
  const breadcrumb = document.querySelector('.breadcrumb');
  const from = getQueryParam('from');
  let html = `<a href="index.html">Home</a> ▸ `;
  if (from === 'product') {
    html += `<a href="productlist.html?from=home">All Products</a>`;
  } else {
    html += `<span>All Products</span>`;
  }
  if (collectionName) {
    html += ` ▸ <span>${collectionName}</span>`;
  }
  breadcrumb.innerHTML = html;
}

renderBreadcrumb();

document.querySelectorAll('.filter-collection-li').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.textContent;
    renderBreadcrumb(name);
  });
});