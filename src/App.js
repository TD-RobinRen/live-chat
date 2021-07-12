import { useState } from 'react';
import { Popover } from 'antd';

import ChatBox from './chat-box';

import './App.css';

function App() {
  const [visible, setVisible] = useState();

  const handleClose = () => {
    setVisible(false);
  }

  return (
    <Popover
      placement="leftBottom"
      content={<ChatBox onClose={handleClose} />}
      trigger="click"
      visible={visible}
    >
      <div className="app-feedback">FeedBack</div>
    </Popover>
  );
}

export default App;
