// page with settings for this bot: https://api.slack.com/apps/A7GAPFANM/bots

const { RtmClient, WebClient, CLIENT_EVENTS, RTM_EVENTS } = require('@slack/client');
const bot_token = require('../config/slack').SLACK_BOT_TOKEN || '';
const { sendToFb } = require('./fb.js');

if (bot_token) {
  console.log('slack rtm received bot token', bot_token);
} else {
  console.log("did not receive bot token");
}
const rtm = new RtmClient(bot_token);
const web = new WebClient(bot_token);

let channel;
// The client will emit an RTM.AUTHENTICATED event on successful connection, with the `rtm.start` payload if you want to cache it
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  for (const c of rtmStartData.channels) {
    if (c.is_member && c.name.toLowerCase() ==='general') {
      channel = c.id; }
    }
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});

// When bot loads and opens connection to channel(s), send message to general that bot has started
rtm.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, () => {
  const feelings = ['into #ahbiFitness', 'ready for you ;)', 'slack', 'ready to fight Amanda', 'ready to eat a watermelon']
  const item = feelings[Math.floor(Math.random()*feelings.length)];
  // rtm.sendMessage('Hello Mr Stark, I am ' + item, channel);
  console.log('Mercury started!');
});

// When bot receives a message:  filter to only receive DMs, filter to replace slack ids in code,
rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  console.log('incoming message!', message);
  if (message.channel) {
    rtm.sendMessage("Your message was received! Sending it to fb...", message.channel);

    const rn = new Date();

    sendToFb(message.text, message.user, rn);
  }
});

module.exports = { rtm, web };
