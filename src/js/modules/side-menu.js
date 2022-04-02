export function sideMenu() {
  const elsOpen = document.querySelectorAll('.js-side-menu');
  const elsClose = document.querySelectorAll('.js-side-menu__close');
  const elOverlay = document.querySelector('.js-side-menu__overlay');
  const elsItem = document.querySelectorAll('.js-side__menu');

  const attributes = {
    id: 'data-id'
  };

  const modifiers = {
    itemActive: 'side-menu--active',
    overlayActive: 'overlay--active'
  };

  elsOpen.forEach(el => {
    el.addEventListener('click', () => {
      const id = el.getAttribute(attributes.id);
      const itemsArr = [].slice.call(elsItem);
      const elItem = itemsArr.find(item => item.getAttribute(attributes.id) === id);

      elItem.classList.add(modifiers.itemActive);
      elOverlay.classList.add(modifiers.overlayActive);
    });
  });

  elsClose.forEach(el => {
    el.addEventListener('click', () => {
      elsItem.forEach(el => el.classList.remove(modifiers.itemActive));
      elOverlay.classList.remove(modifiers.overlayActive);
    });
  });
}