import { HeaderLinkType } from '../../types/HeaderLink';
import classes from './Header.module.scss';
import HeaderLink from './HeaderLink/HeaderLink';



const Header = () => {
  const menuItems: HeaderLinkType[] = [
    {
      title: 'Home',
      url: "/home"
    },
    {
      title: 'Stats',
      url: "/stats"
    },
    {
      title: 'About',
      url: "/about"
    }
  ]

  return (
    <header className={classes.Header}>
      <h1 className={classes.HeaderTitle}>Just Do It App</h1>
      <nav className="m-auto">
        {menuItems.map((menuItem, index) => (
          <HeaderLink key={index}  url={menuItem.url}>{menuItem.title}</HeaderLink>
        ))}
      </nav>
    </header>
  )
}
export default Header;