const NavigationItem = ({ link, title }) => {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

export default NavigationItem;
