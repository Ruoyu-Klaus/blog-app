import React from 'react';
import { setRetryTip } from './redux/saga/actions/common';
// useSelector get global state
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

function App() {
  const dispatch = useDispatch();
  const { retryTip } = useSelector((state: Istate) => state.common);

  const handlerTestRedux = () => {
    dispatch({ type: setRetryTip.TRIGGER, playload: [] });
  };

  console.log(retryTip);
  return (
    <div className='App'>
      <Button type='primary' onClick={handlerTestRedux}>
        This is Btn
      </Button>
    </div>
  );
}

export default App;
