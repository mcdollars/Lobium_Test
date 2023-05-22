import React from 'react'
import { useDispatch } from 'react-redux'
import { Styles } from './style'
import {
  removeTaskAction,
  completeTaskAction
} from '../store/actions'

const Item = ({ index, task }) => {

  const dispatch = useDispatch()
  const removeTask = () => {
    dispatch(removeTaskAction(index))
  };

  const handleCheck = () => {
    dispatch(completeTaskAction(index))
  };

  return (
    <div style={Styles.item} className="flex align-center justify-space w-100 ">
      <div className="flex align-center col-9 ml-3">
        <input
          className="check"
          type="checkbox"
          value="text"
          checked={task.done}
          onChange={handleCheck}
        />
        <div
          style={Styles.itemText}
          className={`${task.done ? "crossed" : ""} col-4`}
        >
          {task.title}
        </div>
        <div style={Styles.itemText} className="col-8">
          {task.description}
        </div>
      </div>
      <button onClick={removeTask} className="remove">
        <i class='fas fa-trash-alt'></i>
      </button>
    </div>
  )
}

export default Item