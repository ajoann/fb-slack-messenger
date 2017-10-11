console.log('btw, slack bot token is:', process.env.SLACK_BOT_TOKEN);

module.exports = {
  'SLACK_BOT_TOKEN': process.env.SLACK_BOT_TOKEN || '',
  'SLACK_VERIFICATION_TOKEN': process.env.SLACK_VERIFICATION_TOKEN || ''
}
