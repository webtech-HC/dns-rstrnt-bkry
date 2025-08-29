// Add aria-current to the right nav link based on file name
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.primary a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((here === '' && href === 'index.html') || here === href || (here === 'index.html' && href === '#')) {
      a.setAttribute('aria-current','page');
    }
  });
})();
