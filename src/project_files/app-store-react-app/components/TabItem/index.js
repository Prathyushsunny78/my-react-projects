import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTab, activeTab} = props
  const {tabId} = tabItem

  return (
    <li className="tab-li">
      <button
        onClick={() => updateActiveTab(tabId)}
        type="button"
        className={tabId === activeTab ? 'tab-btn selected-tab' : 'tab-btn'}
      >
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
