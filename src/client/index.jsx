import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'
console.log(tweets)

class App extends React.Component {
  render() {
      let tweetsItems = tweets.tweets.tweets.map((tweet => {
                  return <Tweet tweet={tweet} />
                });

    return (
      <div>
        {tweetsItems}
      </div>
    );
  }
}
class Tweet extends React.Component {
  render() {
      return (
          <div>
              <User user={this.props.tweet.user} />
              <Entities entities={this.props.tweet.entities} />
              
          </div>
      );
  }
}

class User extends React.Component {
  render() {
      return (
          <div>
              <a href={this.props.user.url}>{this.props.user.name}</a>
          </div>
      );
  }
}

class Entities extends React.Component {
  render() {
      let hashtags = this.props.entities.hashtags.map(hashtag => {
          return <p># {hashtag}</p>
      })
      return (
          <div>
              <p>Urls</p>
              <Urls urls={this.props.entities.urls} />
              <p>Hashtags</p>
              {hashtags}
          </div>
      );
  }
}

class Urls extends React.Component {
  render() {
      let urlItem = this.props.urls.map(url => {
          return(
              <div>
                  <a href={url.url}>URL</a>
                  <a href={url.expanded_url}>Expanded URL</a>
                  <a href={url.display_url}>{url.display_url}</a>
              </div>
          )
      })
      return (
          <div>
              {urlItem}
          </div>
      );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");

