import Modal from 'react-modal';

import { TextInfo } from 'components/CarItem/CarItem.styled';
import {
  AccentText,
  Heder,
  TextBlock,
  Description,
  DescriptionHeder,
  Condition,
  ConditionItem,
  ConditionBox,
  ConditionValue,
  PhoneBtn,
  CloseBtn,
  ModalImg,
} from './Modal.Styled';

Modal.setAppElement('#root');

export const ModalCart = ({
  openModall,
  onClose,
  model,
  type,
  description,
  year,
  fuelConsumption,
  mileage,
  accessories,
  rentalPrice,
  rentalConditions,
  engineSize,
  city,
  country,
  functionalities,
  img,
  make,
  id,
}) => {
  const chosenRentalConditions = rentalConditions.split('\n');
  const minAge = chosenRentalConditions[0].toString().split(':');
  const formattedMileage = new Intl.NumberFormat('en-IN').format(mileage);
  return (
    <Modal
      isOpen={openModall}
      onRequestClose={() => onClose(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1200,
        },
        content: {
          position: 'relative',
          boxSizing: 'border-box',
          width: '541px',
          height: '752px',
          borderRadius: '24px',
          padding: '40px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      {' '}
      <div>
        <ModalImg>
          <img src={img} alt={description} />
        </ModalImg>
        <Heder>
          {make}
          <AccentText>{model}</AccentText>, {year}
        </Heder>
        <TextBlock>
          <TextInfo>{city}</TextInfo>
          <TextInfo>{country}</TextInfo>
          <TextInfo> Id: {id}</TextInfo>
          <TextInfo>Year: {year}</TextInfo>
          <TextInfo>Type: {type}</TextInfo>
        </TextBlock>
        <TextBlock>
          <TextInfo>Fuel Consumption: {fuelConsumption}</TextInfo>
          <TextInfo>Engine Size: {engineSize}</TextInfo>
        </TextBlock>
        <Description>{description}</Description>
        <div>
          <DescriptionHeder>Accessories and functionalities:</DescriptionHeder>
          <TextBlock>
            {accessories.map(item => (
              <TextInfo key={item}>{item}</TextInfo>
            ))}
          </TextBlock>
          <TextBlock>
            {functionalities.map(item => (
              <TextInfo key={item}>{item}</TextInfo>
            ))}
          </TextBlock>
          <Condition>
            <DescriptionHeder>Rental Conditions:</DescriptionHeder>
            <ConditionBox>
              <ConditionItem>
                Minimum age: <ConditionValue>{minAge[1]}</ConditionValue>
              </ConditionItem>
              <ConditionItem>{chosenRentalConditions[1]}</ConditionItem>
              <ConditionItem>{chosenRentalConditions[2]}</ConditionItem>
              <ConditionItem>
                Mileage: <ConditionValue>{formattedMileage}</ConditionValue>
              </ConditionItem>
              <ConditionItem>
                Price: <ConditionValue>{rentalPrice}</ConditionValue>
              </ConditionItem>
            </ConditionBox>
          </Condition>
          <PhoneBtn href="tel:+380730000000">Rental car</PhoneBtn>
        </div>
        <CloseBtn onClick={() => onClose(false)} />
      </div>
    </Modal>
  );
};
