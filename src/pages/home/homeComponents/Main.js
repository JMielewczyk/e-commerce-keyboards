//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { LinkContainerImage } from '../../../styles/elements/LinkContainerImage';
import { HomeMainWrapper } from '../../../styles/elements/Home/HomeMain/HomeMainWrapper';
import { P10CenterBold } from '../../../styles/elements/Home/HomeMain/P10CenterBold';
import { LinkWhite } from '../../../styles/elements/LinkWhite';

//Images
import keyboards from '../../../assets/images/prebuilt.jpg';
import keycaps from '../../../assets/images/keycaps.jpg';
import switches from '../../../assets/images/switches.jpg';
import barebone from '../../../assets/images/barebone.jpg';

const Main = () => {
  const categories = ['Keycaps', 'BareboneKits', 'Switches', 'Keyboards'];
  const categoryImages = [keycaps, barebone, switches, keyboards];

  const categoriesMap = categories.map((item, index) => (
    <LinkContainerImage style={{ backgroundImage: `url(${categoryImages[index]})` }} key={item}>
      <LinkWhite>
        <Link to={`/home/${item.toLowerCase()}`}>{item}</Link>
      </LinkWhite>
    </LinkContainerImage>
  ));

  return (
    <HomeMainWrapper>
      <P10CenterBold>Building Your First Mechanical Keyboard is Easier Than Ever</P10CenterBold>
      {categoriesMap}
    </HomeMainWrapper>
  );
};

export default Main;
