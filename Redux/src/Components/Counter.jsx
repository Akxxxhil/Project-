import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slice/Counterslice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
      <button onClick={()=>{
        dispatch(increment())
      }}> Increment</button>

      <br /><br />
      <div>{count}</div>
      <br /><br />

      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
    </div>
  )
}

export default Counter
