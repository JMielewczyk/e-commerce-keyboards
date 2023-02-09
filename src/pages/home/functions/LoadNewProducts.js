//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { PAbsoluteBottom } from '../../../styles/elements/Home/HomeNewProducts/PAbsoluteBottom';
import { ContAbsolute30H } from '../../../styles/elements/Home/HomeNewProducts/ContAbsolute30H';
import { P20 } from '../../../styles/elements/P20';
import { LinkRelMin30Vh } from '../../../styles/elements/Home/HomeNewProducts/LinkRelMin30Vh';

const LoadNewProducts = ({ data, images, pathToProduct }) => {
  const mapNewProducts = data.map((object, index) => {
    if (object.newProduct === true) {
      return (
        <LinkRelMin30Vh style={{ backgroundImage: `url(${images[index][0]})` }} key={object.name}>
          <Link to={`/home/${pathToProduct[index]}`}>
            <PAbsoluteBottom>
              <P20>{object.name}</P20>
            </PAbsoluteBottom>
            <ContAbsolute30H></ContAbsolute30H>
          </Link>
        </LinkRelMin30Vh>
      );
    }
  });
  return <>{mapNewProducts}</>;
};
export default LoadNewProducts;
