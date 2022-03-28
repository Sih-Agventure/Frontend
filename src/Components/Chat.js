import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import jwt_decode from "jwt-decode";

import 'stream-chat-react/dist/css/index.css';
const user = window.sessionStorage.getItem("token") ? jwt_decode(window.sessionStorage.getItem("token")) : "";

const chatClient = StreamChat.getInstance('66tr3aj28xfh');

const userToken = user.id === "623580a5bf80af5b18f76a1f" ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RpbGwtc25vd2ZsYWtlLTgifQ.SA_rI4adbjUDbb3_EULqFe4z1sTcxDBgd8BxcRbrCCI' : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYm9sZC1zaGFkb3ctNyJ9.lGoTiivd4A7mk4GfGC7Z1albkQYqSZOCBJk-j2yQyZM';
chatClient.connectUser(
  { 
    id: user.id === "623580a5bf80af5b18f76a1f" ? 'still-snowflake-8':'bold-shadow-7',
    name: user.id === "623580a5bf80af5b18f76a1f" ? 'still-snowflake-8':'bold-shadow-7',
    image: user.id === "623580a5bf80af5b18f76a1f" ? 'https://getstream.io/random_png/?id=still-snowflake-8&name=still-snowflake-8' :'https://getstream.io/random_png/?id=bold-shadow-7&name=bold-shadow-7' ,
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['still-snowflake-8'],
});

const Message = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default Message;
