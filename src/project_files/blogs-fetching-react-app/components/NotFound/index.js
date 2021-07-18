import './index.css'

const NotFound = (props) => {
  const {match} = props
  console.log(match)
  return (<div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">Not Found</h1>
  </div>
  )}

export default NotFound
