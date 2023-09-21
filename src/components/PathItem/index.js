import './index.css'

const PathItem = props => {
  const {pathDetails, onChangePath, isActive} = props
  const {pathText, pathId} = pathDetails

  const onClickPath = () => {
    onChangePath(pathId)
  }

  const activeClassName = isActive ? 'active-path' : ''

  return (
    <li className="path">
      <button
        type="button"
        onClick={onClickPath}
        className={`path-button ${activeClassName}`}
      >
        {pathText}
      </button>
    </li>
  )
}
export default PathItem
