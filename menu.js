(function () {
  var menus = document.querySelectorAll('.menu details');
  function closeMenus() { for (var i = 0; i < menus.length; i++) { menus[i].open = false; } }
  function openTarget() {
    var id = location.hash.slice(1);
    if (!id) { return; }
    var el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') { el.open = true; }
  }
  document.addEventListener('click', function (e) {
    var t = e.target;
    var a = t.closest ? t.closest('a[href^="#"]') : null;
    if (a || !t.closest || !t.closest('.menu')) { closeMenus(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenus(); } });
  window.addEventListener('hashchange', openTarget);
  openTarget();
})();
