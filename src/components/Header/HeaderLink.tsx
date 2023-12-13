import { ReactNode } from 'react';
import classes from './HeaderLink.module.scss';


type HeaderLinkProps = {
  url: string;
  children: ReactNode;
}

const HeaderLink = ({ url, children }: HeaderLinkProps) => {
  return (
    <a className={classes.HeaderLink + " mr-2 ml-2"} href={url}>{children}</a>
  )
}
export default HeaderLink;