import React, { useContext } from 'react';
//style
import { Page, Info, Image } from './style';
//image
import CartImage from '../CartImage';
//context
import cartContext from '../../cartContext';
//type
import { ECartAction } from '../../type';

const Checked = () => {
  const {
    cartState: { isChecked },
    dispatch,
  } = useContext(cartContext);
  return (
    <Page isChecked={isChecked}>
      <Info>
        <h2>訂購已完成</h2>
        <Image>
          <CartImage />
        </Image>
        <button
          onClick={() => dispatch({ type: ECartAction.CHECKED_COMPLETE })}
        >
          繼續訂購
        </button>
      </Info>
    </Page>
  );
};

export default Checked;
