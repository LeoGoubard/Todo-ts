import { HeaderLinkType } from '../../types/HeaderLink';
import classes from './Header.module.scss';



const HeaderLink = ({ title, url }: HeaderLinkType) => {
  return (
    <a className={classes.HeaderLink} href={url}>{title}</a>
  )
}
export default HeaderLink;