import '../sass/styles.scss';
import elements from '../js/elements';

const { navbarBurgerElement, navbarMenuElement } = elements;

navbarBurgerElement.addEventListener('click', () => {
	navbarBurgerElement.classList.toggle('is-active');
	navbarMenuElement.classList.toggle('is-active');
});
