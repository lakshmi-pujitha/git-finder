import PropTypes from 'prop-types';
import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa"
function Feedbackitem({item, handelDelete}) {

  return (
        <Card>
             <div className='delete-btn'>
              <button onClick={() => handelDelete(item.id)} className='close'>
                  <FaTimes color='#E95555'/>
              </button>
             </div>
             <div className='num-text-flex'>
              <div className='num-display'>{item.rating}</div>
              <div className='text-display'>{item.text}</div>
             </div>
        </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}

export default Feedbackitem