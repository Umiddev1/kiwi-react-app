import './NavItem.css';
function NavItem({text}) {
  return <li className="nav__item"><a href='#' className="nav__link">{text}</a></li>
}

export default NavItem