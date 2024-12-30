import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incr,decre} from './counterSlice'


const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className='flex justify-around pt-9 font-serif text-2xl'>
      <button
        onClick={() => dispatch(incr())}
        className='bg-blue-300 p-4 rounded-lg'
      >incre</button>
      {count}
      <button
        onClick={() => dispatch(decre())}
        className='bg-slate-700 p-4 rounded-xl text-white'
      >decre</button>
    </div>
  )
}

export default App
