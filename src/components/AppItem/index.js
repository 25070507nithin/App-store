// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-item">
      <img src={imageUrl} className="app-item-image" alt={appName} />
      <p className="app-item-name">{appName}</p>
    </li>
  )
}

export default AppItem
