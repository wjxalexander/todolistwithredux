const defaultState = {
    inputVal:"qq",
    list:[1,2,3]
}
export default (state=defaultState,action)=>{ //state is the previous state
    if(action.type==="change_inputVal"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value;
        return newState
    }
    if(action.type === "add_todoItem"){
        const newState = JSON.parse(JSON.stringify(state))
        const {list} = newState
        newState.list = [...list, action.value]
        newState.inputVal = ""
        return newState
    }
    if(action.type === "delete_todoItem"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}