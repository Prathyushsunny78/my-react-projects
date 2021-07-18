import './index.css'

const AppItem = props => {
  const {appItem} = props
  return (
    <div className="app-item">
      <img className="app-icon" src={appItem.imageUrl} alt={appItem.appName} />
      <p className="app-name">{appItem.appName}</p>
    </div>
  )
}

export default AppItem
