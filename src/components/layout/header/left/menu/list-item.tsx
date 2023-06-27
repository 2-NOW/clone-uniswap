import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface ListItemProps {
  label: string;
  href: string;
  isExternal: boolean;
  style: {
    list: string;
    link: string;
  };
}

export const ListItem = ({ label, href, style, isExternal }: ListItemProps) => {
  return (
    <li className={clsx([style.list])} key={`${label}-${href}`}>
      {isExternal ? (
        <a
          className={clsx([style.link])}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      ) : (
        <NavLink to={href} className={clsx([style.link])} end>
          {label}
        </NavLink>
      )}
    </li>
  );
};
