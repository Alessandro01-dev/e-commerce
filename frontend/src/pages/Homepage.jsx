import { useEffect, useMemo } from 'react'
import MainLayout from '../components/mainLayout/MainLayout'
import Hero from '../components/hero/Hero'
import CategoryCircle from '../components/categoryCircle/CategoryCircle'
import HomeCarousel from '../components/homeCarousel/HomeCarousel'
import ProductCard from '../components/productsList/productCard/ProductCard'
import { Spinner, Container } from 'react-bootstrap'
import useProducts from '../hooks/useProducts'
import { categories } from '../utils/categories'

const Homepage = () => {
  const { getPopularCategories, popularCategories, productsIsLoading: categoriesLoading } = useProducts();
  const { getProducts: getDeals, productsData: dealsData, productsIsLoading: dealsLoading } = useProducts()
  const { getProducts: getNewArrivals, productsData: newArrivalsData, productsIsLoading: arrivalsLoading } = useProducts()

  useEffect(() => {
    getPopularCategories();
    getDeals(1, 20, { onSale: true });
    getNewArrivals(1, 15);
  }, []);

  const productBreakpoints = {
    0: { slidesPerView: 1.4 },
    768: { slidesPerView: 3.2 },
    1024: { slidesPerView: 4.5 }
  }

  const categoryBreakpoints = {
    0: { slidesPerView: 2.5 },
    768: { slidesPerView: 4.5 },
    1024: { slidesPerView: 6.5 }
  }

  const categoriesToShow = useMemo(() => {
    const allSubList = categories.flatMap(group => group.subcategories);
    return popularCategories.map(dbCat => {
      return allSubList.find(sub => sub.name === dbCat.name);
    }).filter(Boolean);
  }, [popularCategories]);

  const isInitialLoading = categoriesLoading || dealsLoading || arrivalsLoading;

  return (
    <MainLayout>
      <Hero />

      {isInitialLoading ? (
        <Container className="text-center py-5 my-5">
          <Spinner animation="border" variant="dark" />
        </Container>
      ) : (
        <>
          <HomeCarousel title="Explore Popular Categories" breakpoints={categoryBreakpoints}>
            {categoriesToShow.map((sub, idx) => (
              <CategoryCircle key={idx} category={sub} />
            ))}
          </HomeCarousel>

          <HomeCarousel
            title="Today's Best Deals For You!"
            viewAllLink="/shop"
            breakpoints={productBreakpoints}
          >
            {dealsData?.products?.map(p => <ProductCard key={p._id} product={p} />)}
          </HomeCarousel>

          <HomeCarousel
            title="New Arrivals"
            viewAllLink="/shop"
            breakpoints={productBreakpoints}
          >
            {newArrivalsData?.products?.map(p => <ProductCard key={p._id} product={p} />)}
          </HomeCarousel>
        </>
      )}
    </MainLayout>
  )
}

export default Homepage