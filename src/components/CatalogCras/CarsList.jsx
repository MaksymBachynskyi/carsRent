import { getCars, getMoreCars } from 'fetch';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/selectors';
import { CarItem } from 'components/CarItem/CarItem';
import { SearchBlock } from 'components/SearchBlock/SearchBlock';
import { List, LoadButton } from './CarsList.styled';

let countPage = 1;
export const CarsList = () => {
  const allCars = useSelector(selectCars);
  const [valueSelect, setValueSelect] = useState(' Enter the text');
  const [filtredMassive, setFiltredCars] = useState([]);

  const filtredCars = () => {
    return allCars.filter(i => {
      return i.make === valueSelect;
    });
  };

  const dispatch = useDispatch();
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      dispatch(getCars(1));

      initialized.current = true;
    }
  }, [dispatch, allCars.length]);

  return (
    <div>
      <SearchBlock
        valueSelect={valueSelect}
        setValueSelect={setValueSelect}
        filtredCars={filtredCars}
        filtredMassive={filtredMassive}
        setFiltredCars={setFiltredCars}
      />
      <List>
        {filtredMassive.length
          ? filtredMassive.map(
              ({
                id,
                model,
                img,
                type,
                description,
                year,
                rentalPrice,
                mileage,
                rentalConditions,
                make,
                address,
                rentalCompany,
                functionalities,
                fuelConsumption,
                accessories,
                engineSize,
              }) => {
                return (
                  <CarItem
                    key={id}
                    modelcar={model}
                    type={type}
                    description={description}
                    year={year}
                    make={make}
                    rentalCompany={rentalCompany}
                    rentalPrice={rentalPrice}
                    img={img}
                    mileage={mileage}
                    accessories={accessories}
                    functionalities={functionalities}
                    engineSize={engineSize}
                    fuelConsumption={fuelConsumption}
                    rentalConditions={rentalConditions}
                    address={address}
                    id={id}
                  />
                );
              }
            )
          : allCars.map(
              (
                {
                  id,
                  model,
                  img,
                  type,
                  description,
                  year,
                  rentalPrice,
                  mileage,
                  rentalConditions,
                  make,
                  address,
                  rentalCompany,
                  functionalities,
                  fuelConsumption,
                  accessories,
                  engineSize,
                },
                indx
              ) => {
                return (
                  <CarItem
                    key={id}
                    modelcar={model}
                    type={type}
                    description={description}
                    year={year}
                    make={make}
                    rentalCompany={rentalCompany}
                    rentalPrice={rentalPrice}
                    img={img}
                    mileage={mileage}
                    accessories={accessories}
                    functionalities={functionalities}
                    engineSize={engineSize}
                    fuelConsumption={fuelConsumption}
                    rentalConditions={rentalConditions}
                    address={address}
                    id={id}
                  />
                );
              }
            )}
      </List>
      <LoadButton
        disabled={allCars.length / countPage < 12 ? true : false}
        onClick={() => dispatch(getMoreCars((countPage += 1)))}
      >
        {allCars.length && <p>Load More {countPage}</p>}
      </LoadButton>
    </div>
  );
};
