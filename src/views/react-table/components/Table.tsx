import React, { FC } from 'react';
//style
import { TableDiv, ImageWrapper } from '../style';
//components
import { Image } from 'src/components/image';
//type
import { TTableFoods } from '../type';

const Table: FC<TTableFoods> = ({ th, foods }) => {
  return (
    <TableDiv>
      <table>
        <thead>
          <tr>
            {th.map((ele) => (
              <th>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foods.map((ele) => (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>
                <ImageWrapper>
                  <Image src={ele.image} />
                </ImageWrapper>
              </td>
              <td>{ele.price}</td>
              <td>{ele.calorie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableDiv>
  );
};

export default Table;
