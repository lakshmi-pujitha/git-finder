import PropTypes from 'prop-types'
function Header({text, bgcolor, textcolor}) {

  const headerStyle = {
     backgroundColor: bgcolor,
     color:textcolor,
     textAlign:"center",
     padding: "10px 0px",
  }

  return (
    <header style={headerStyle}>
        <div className="container">
        <h1>{text}</h1>
    </div>
    </header>
  )
}


Header.defaultProps = {
    text: "FeedBack UI",
    bgcolor:"#005555",
    textcolor: "#ffffff",
}

Header.propTypes = {
    text: PropTypes.string,
    bgcolor:PropTypes.string,
    textcolor:PropTypes.string
}

export default Header