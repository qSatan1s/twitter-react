import React, { useState } from 'react';
import '../css/TweetBox.css';

import { Avatar, Button } from '@material-ui/core';

import db from './firebase';

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Kirill Bashlykov',
      username: 'qSatan1s',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://sun1-96.userapi.com/DofoWKksrSahHcS2E782_3glAzUr0V5s5SlPdg/FIAHtdkN8-o.jpg',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://sun1-96.userapi.com/DofoWKksrSahHcS2E782_3glAzUr0V5s5SlPdg/FIAHtdkN8-o.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />

        <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}
