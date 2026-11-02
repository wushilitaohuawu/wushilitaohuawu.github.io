
'use strict';
if (window.LA && typeof window.LA.init === 'function') window.LA.init({id:'3Qh1OAyzK3CUqior',ck:'3Qh1OAyzK3CUqior'});
const form = document.getElementById('resource-filters');
if (form) {
  form.hidden = false;
  const query = document.getElementById('resource-query');
  const category = document.getElementById('resource-category');
  const cards = Array.from(document.querySelectorAll('[data-resource]'));
  function filter() {
    const terms = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let count = 0;
    for (const card of cards) {
      const matches = (!category.value || card.dataset.category === category.value) && terms.every(term => card.dataset.search.includes(term));
      card.hidden = !matches;
      if (matches) count++;
    }
    document.getElementById('result-count').textContent = '显示 ' + count + ' / ' + cards.length + ' 项资源';
    document.getElementById('empty-state').hidden = count > 0;
  }
  form.addEventListener('submit', event => { event.preventDefault(); filter(); });
  query.addEventListener('input', filter);
  category.addEventListener('change', filter);
}
