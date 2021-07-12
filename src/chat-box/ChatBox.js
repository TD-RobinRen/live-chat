import React from 'react';
import Chat, { Bubble, useMessages, LocaleProvider } from '@chatui/core';

import '@chatui/core/dist/index.css';
import './chatui-theme.css';

const ChatBox = props => {
  const { onClose } = props;
  const { messages, appendMsg, setTyping } = useMessages([]);

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <LocaleProvider>
      <div className="chat-box">
        <Chat
          wideBreakpoint="100px"
          toolbar={[
            {
              type: 'photo',
              title: 'Photo',
              icon: 'image',
            },
          ]}
          locale="en-US"
          navbar={{ title: 'Chat Room' }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          onSend={handleSend}
          placeholder="types"
        />
      </div>
    </LocaleProvider>
  );
};

export default ChatBox;