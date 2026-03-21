import classes from './CategoryCircle.module.css'
import { Link } from 'react-router-dom'

const CategoryCircle = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.name}`} className="text-decoration-none text-dark d-block text-center">
      <div className={classes["circle-container"]}>
        <img src={category.img} alt={category.name} className="w-100 h-100 object-fit-cover rounded-circle border" />
      </div>
      <p className="mt-2 fw-medium">{category.name}</p>
    </Link>
  )
}

export default CategoryCircle