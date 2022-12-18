//Hooks
import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { PAbsoluteBottom } from '../../../styles/elements/HomeNewProducts/PAbsoluteBottom';
import { ContAbsolute30H } from '../../../styles/elements/HomeNewProducts/ContAbsolute30H';
import { P20 } from '../../../styles/elements/P20';
import { LinkRelMin30Vh } from '../../../styles/elements/HomeNewProducts/LinkRelMin30Vh';

const LoadNewProducts = ({ data }) => {
  let newProducts = [];
  Object.entries(data).forEach(([category, value]) => {
    value.forEach((object) => {
      Object.entries(object).forEach((key) => {
        if (key[0] === 'newProduct' && key[1] === true) {
          object.category = category;
          newProducts.push(object);
        }
        return;
      });
    });
  });
  const mapNewProducts = newProducts.map((element) => {
    return (
      <LinkRelMin30Vh
        style={{ backgroundImage: `url(${element.imageTemplate})` }}
        key={element.name}>
        <Link to={`/home/${element.category}/${element.name}`}>
          <PAbsoluteBottom>
            <P20>{element.name}</P20>
          </PAbsoluteBottom>
          <ContAbsolute30H></ContAbsolute30H>
        </Link>
      </LinkRelMin30Vh>
    );
  });
  return <>{mapNewProducts}</>;
};

export default LoadNewProducts;
