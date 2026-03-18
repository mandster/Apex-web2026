
import { Link } from 'react-router-dom'


const Description = () => {
  return (
    <div className='centered-text mt-4'>
        <p className="tagline">
            Industrial electrical control, engineered for performance.
          </p>
          <p className="description">
            Since 1975, Apex has manufactured switchgear and motor-control
            equipment for reliable field performance.
         <Link to="../About">Read more</Link>
          </p>
    </div>
    
  )
}

export default Description
