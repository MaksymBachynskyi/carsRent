import { useSelector } from 'react-redux';
import { selectCars, selectFavorite } from '../../redux/selectors';

import { CarItem } from 'components/CarItem/CarItem';

export const FavoriteCars = () => {
  const favoriteList = useSelector(selectFavorite);

  const allCars = useSelector(selectCars);
  const favoriteCars = allCars.filter(item => favoriteList.includes(item.id));
  console.log(favoriteList, favoriteCars);
  return (
    <div>
      {!favoriteCars.length ? (
        <p>You dont have favorite cars</p>
      ) : (
        favoriteCars.map(
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
                model={model}
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
      )}
    </div>
  );
};
