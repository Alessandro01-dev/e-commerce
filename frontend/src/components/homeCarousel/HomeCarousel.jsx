import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import 'swiper/css'
import 'swiper/css/free-mode'
import classes from './HomeCarousel.module.css'

const HomeCarousel = ({ title, children, viewAllLink, breakpoints }) => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold m-0">{title}</h3>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-dark fw-semibold text-decoration-none">
            View All
          </Link>
        )}
      </div>
      <Swiper
        modules={[FreeMode, Mousewheel]}
        spaceBetween={20}
        freeMode={true}
        mousewheel={{ 
          forceToAxis: true,
          releaseOnEdges: false
        }}
        breakpoints={breakpoints}
        className={`${classes['swiper-isolated']} pb-3`}
      >
        {children?.map((child, idx) => (
          <SwiperSlide key={idx} className={classes['custom-slide']}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default HomeCarousel