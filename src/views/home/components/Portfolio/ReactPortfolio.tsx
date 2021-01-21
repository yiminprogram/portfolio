import React from 'react';
//style
import { ReactCard, Image, LinkBtn } from '../../style';
//image
import Logo from 'src/assets/image/logo/react-profile.svg';

const ReactPortfolio = () => {
  return (
    <ReactCard>
      <Image>
        <img src={Logo} alt="react" />
      </Image>
      <LinkBtn color="#53c1de" to="/portfolio/react">
        前往React作品集 &gt;
      </LinkBtn>
    </ReactCard>
  );
};

export default ReactPortfolio;
