import { useState } from 'react';
import {
  Arrow,
  ArrowUp,
  Button,
  Headers,
  InputLeft,
  InputRigth,
  Label,
  ListPrice,
  ListToSearch,
  Select,
} from './SearchBlock.styled';

export const SearchBlock = ({
  valueSelect,
  setValueSelect,
  filtredCars,
  setFiltredCars,
  filtredMassive,
}) => {
  const [open, setOpen] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [valuePrice, setValuePrice] = useState(' ');
  const [lowPrice, setLowPrice] = useState('From  ');
  const [highPrice, setHighPrice] = useState('To  ');

  const carsBrand = [
    'Buick',
    'Volvo',
    'Hummer',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenPrice = () => {
    setOpenPrice(!openPrice);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        alignItems: 'end',
        marginBottom: '55px',
        marginTop: '30px',
      }}
    >
      <Label>
        <Headers>Car brand </Headers>
        <div
          style={{
            position: 'relative',
            width: '224px',
          }}
        >
          {!open ? <Arrow /> : <ArrowUp />}
          <Select name="cars" defaultValue={'DEFAULT'} onClick={handleOpen}>
            <option value="DEFAULT" disabled hidden>
              {valueSelect}
            </option>
          </Select>
          {open && (
            <ListToSearch>
              {carsBrand.map((i, indx) => {
                return (
                  <li
                    key={indx}
                    onClick={() => {
                      setValueSelect(i);
                    }}
                  >
                    {i}
                  </li>
                );
              })}
            </ListToSearch>
          )}{' '}
        </div>
      </Label>
      <Label>
        <Headers>Price/1 hour </Headers>
        <div
          style={{
            position: 'relative',
            width: '125px',
          }}
        >
          {!openPrice ? <Arrow /> : <ArrowUp />}
          <Select
            name="cars"
            defaultValue={'DEFAULT'}
            onClick={handleOpenPrice}
          >
            <option value="DEFAULT" disabled hidden>
              To {valuePrice}$
            </option>
          </Select>
          {openPrice && (
            <ListPrice>
              {prices.map((i, indx) => {
                return (
                  <li
                    key={indx}
                    onClick={() => {
                      setValuePrice(i);
                    }}
                  >
                    {i}
                  </li>
                );
              })}
            </ListPrice>
          )}{' '}
        </div>
      </Label>{' '}
      <Label>
        <Headers> Сar mileage/km</Headers>
        <div>
          <InputLeft
            type="text"
            name="from"
            value={lowPrice}
            onChange={e => setLowPrice(e.target.value)}
          />
          <InputRigth
            type="text"
            name="from"
            value={highPrice}
            onChange={e => setHighPrice(e.target.value)}
          />
        </div>
      </Label>
      <Button
        type="button"
        disabled={valueSelect === ' Enter the text' ? true : false}
        onClick={() => setFiltredCars(filtredCars)}
      >
        Search
      </Button>
    </div>
  );
};
