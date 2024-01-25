import NavigationItem from './NavigationItem';

function NavigationBar() {
  const navigation = [
    { title: 'Product', link: 'product' },
    { title: 'Accessories', link: 'accessories' },
    { title: 'Gallery', link: 'gallery' },
    { title: 'Cart', link: 'cart' },
  ];
  return (
    <nav>
      <ul>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={index}
            link={navItem.link}
            title={navItem.title}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationBar;
