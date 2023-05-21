import * as CONSTANTS from './constants'

export const removeTaskAction = (index) => {
    return {
        type: CONSTANTS.REMOVE_TASK,
        payload: {
            index
        }
    }
}

export const completeTaskAction = (index) => {
    return {
        type: CONSTANTS.CHECK_TASK,
        payload: {
            index
        }
    }
}

export const addTaskAction = (data) => {
    return {
        type: CONSTANTS.ADD_TASK,
        payload: data
    }
}