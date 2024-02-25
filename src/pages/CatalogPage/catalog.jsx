import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { CarsList } from 'components/CatalogCras/CarsList';

const Catalog = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      {isLoading && <div>...Loading</div>}
      <CarsList />
    </div>
  );
};

export default Catalog;
