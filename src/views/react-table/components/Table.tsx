import React, { FC } from 'react';
//style
import { TableDiv, ImageWrapper } from '../style';
//components
import { Image } from 'src/components/image';
//type
import { TTableFoods, ESortStatus } from '../type';
//icons
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const arrowIcon = (sort: ESortStatus) => {
  switch (sort) {
    case ESortStatus.ASCENDING:
      return <ArrowDropUp />;
    case ESortStatus.DESCENDING:
      return <ArrowDropDown />;
    default:
      return;
  }
};

const Table: FC<TTableFoods> = ({ header, foods, getSort }) => {
  return (
    <TableDiv>
      <table>
        <thead>
          <tr>
            {header.map((ele) => (
              <th onClick={() => getSort(ele.title)}>
                <div>
                  {ele.title}
                  {arrowIcon(ele.sort)}
                </div>
              </th>
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
