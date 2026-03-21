import MainLayout from '../components/mainLayout/MainLayout';
import ProductsList from '../components/productsList/ProductsList';
import SearchSection from '../components/searchSection/SearchSection';
import { useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const title = searchParams.get('title') || '';

  const handleSearchChange = (query) => {
    const newParams = new URLSearchParams(searchParams);
    if (query) newParams.set('title', query);
    else newParams.delete('title');
    setSearchParams(newParams);
  };

  return (
    <MainLayout>
      <SearchSection onSearchChange={handleSearchChange} currentTitle={title} />
      <ProductsList filters={{ category, title }} />
    </MainLayout>
  );
};

export default ShopPage;