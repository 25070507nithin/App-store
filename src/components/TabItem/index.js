// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className="tab-button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
