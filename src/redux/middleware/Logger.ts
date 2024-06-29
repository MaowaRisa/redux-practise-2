 const Logger = (state) => (next) => (action) =>{
    console.log('current state =>', state.getState())
    console.log('Action =>', action)
    next(action)
    console.log('Next state =>', state.getState())
}
export default Logger;