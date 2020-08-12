import React from 'react';
import '../css/TweetBox.css';

import { Avatar, Button } from '@material-ui/core';
export default function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://sun1-96.userapi.com/DofoWKksrSahHcS2E782_3glAzUr0V5s5SlPdg/FIAHtdkN8-o.jpg' />
          <input placeholder="What's happening?" type='text' />
        </div>
        <input
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />

        <Button type='submit' className='tweetBox__tweetButton'>
          Tweet
        </Button>
      </form>
    </div>
  );
}
