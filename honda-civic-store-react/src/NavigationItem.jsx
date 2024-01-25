import { Link } from 'react-router-dom';

const NavigationItem = ({ link, title }) => {
  return (
    <li>
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default NavigationItem;
