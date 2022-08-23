import PropTypes from 'prop-types'

function Card({ children, reverse}) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>
  // return <div className="card" style={{
  //   backgroundColor: reverse ? '#111111' : '#ffffff',
  //   color: reverse ? '#ffffff' : '#111111'
  // }}>{children}</div>
}

Card.defaultProps = {
   reverse: false,
}

Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}
export default Card;