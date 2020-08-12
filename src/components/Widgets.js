import React from 'react';
import '../css/Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1293213169138257922'} />

        <TwitterTimelineEmbed sourceType='profile' screenName='durov' options={{ height: 400 }} />

        <TwitterShareButton
          url={'https://facebook.com/durov'}
          options={{ text: 'IT in your hands', via: 'durov' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
