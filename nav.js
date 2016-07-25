(function () {

  showPage(location.hash);

  // You can nest IIFES for additional segmentation
  // and also name IIFEs for additional context
  ;(function addNavLinkEvents () {
    var navLinks = document.querySelectorAll('li');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', clickedNavLink);
    }
  }())

  function clickedNavLink (evt) {
    var pages = document.querySelectorAll('.page');

    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.add('hidden');
    }

    showPage(evt.target.hash);
  }

  function showPage (id) {
    if (id) {
      document.querySelector(id).classList.remove('hidden');
    } else {
      document.querySelector('#home').classList.remove('hidden');
    }
  }

}())
