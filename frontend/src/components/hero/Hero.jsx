import classes from './Hero.module.css'
import hero from '../../assets/hero.avif'

const Hero = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <div className={`${classes["hero-img-container"]} position-relative`}>
            <img className="w-100 h-100 object-fit-cover"
              src={hero}
              alt="A person shopping online with a laptop and shopping bags in the background" />
          </div>
          <h1 className={`position-absolute ${classes["hero-title"]}`}>Add. Explore. Shop. <span className="text-black">Repeat.</span></h1>
        </div>
      </div>
    </header>
  )
}

export default Hero