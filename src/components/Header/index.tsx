import { HeaderLinkType } from '../../types/HeaderLink';
import classes from './Header.module.scss';
import HeaderLink from './HeaderLink';



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
      <h1 className={classes.HeaderTitle}>Tdo App</h1>
      <nav>
        {menuItems.map((menuItem, index) => (
          <HeaderLink key={index} title={menuItem.title} url={menuItem.url} />
        ))}
      </nav>
    </header>
  )
}
export default Header;