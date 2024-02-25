import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar } from '../../redux/slices.js/favoriteCarsSlice';
import { useState } from 'react';
import { ModalCart } from 'Modal/Modal';

import {
  ButtomDetails,
  FavHeart,
  Heart,
  Img,
  ImgWrapper,
  Item,
  MainTextBlock,
  MainTextInfo,
  TextBlock,
  TextContainer,
  TextInfo,
} from './CarItem.styled';

import { selectFavorite } from '../../redux/selectors';
import { AccentText } from 'Modal/Modal.Styled';

export const CarItem = ({
  modelcar,
  make,
  type,
  description,
  year,
  rentalPrice,
  img,
  address,
  rentalCompany,
  functionalities,
  rentalConditions,
  engineSize,
  accessories,
  fuelConsumption,
  mileage,
  id,
}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const favoriteList = useSelector(selectFavorite);
  const city = address.split(',')[1];
  const country = address.split(',')[2];

  return (
    <div>
      <Item>
        <ImgWrapper>
          <Img src={img} alt={description} />
          {favoriteList.includes(id) ? (
            <FavHeart onClick={() => dispatch(addFavoriteCar(id))} />
          ) : (
            <Heart onClick={() => dispatch(addFavoriteCar(id))} />
          )}
        </ImgWrapper>
        <TextContainer>
          <MainTextBlock>
            <MainTextInfo>
              {' '}
              {make}
              <AccentText>{modelcar}</AccentText>, {year}
            </MainTextInfo>
            <MainTextInfo>{rentalPrice}</MainTextInfo>
          </MainTextBlock>
          <TextBlock>
            <TextInfo>{city}</TextInfo>
            <TextInfo>{country}</TextInfo>
            <TextInfo>{rentalCompany}</TextInfo>
            <TextInfo>Premium</TextInfo>
          </TextBlock>
          <TextBlock>
            <TextInfo>{type}</TextInfo>
            <TextInfo>{modelcar}</TextInfo>
            <TextInfo>{id}</TextInfo>
            <TextInfo>{functionalities[0]}</TextInfo>{' '}
          </TextBlock>
        </TextContainer>
        <ButtomDetails type="button" onClick={() => setOpenModal(true)}>
          Learn more
        </ButtomDetails>
      </Item>
      <ModalCart
        openModall={openModal}
        onClose={setOpenModal}
        model={modelcar}
        engineSize={engineSize}
        type={type}
        description={description}
        functionalities={functionalities}
        year={year}
        rentalPrice={rentalPrice}
        accessories={accessories}
        fuelConsumption={fuelConsumption}
        rentalConditions={rentalConditions}
        mileage={mileage}
        img={img}
        id={id}
        make={make}
        city={city}
        country={country}
      />
    </div>
  );
};
