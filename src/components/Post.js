import React from 'react';

import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import '../css/Post.css';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://sun1-96.userapi.com/DofoWKksrSahHcS2E782_3glAzUr0V5s5SlPdg/FIAHtdkN8-o.jpg' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Kirill Bashlykov{' '}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' /> @qSatan1s
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, unde blanditiis
              nostrum, perferendis magni sequi necessitatibus aut provident praesentium repellendus
              temporibus in nobis quaerat, tempore obcaecati totam pariatur eligendi! Labore.
            </p>
          </div>
        </div>
        <img
          className='post__photo'
          src='https://cdn24.img.ria.ru/images/155202/64/1552026446_0:616:1200:1291_1400x0_80_0_0_54fef6a92bc576fba0ef63ef4cf462bf.jpg'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;
