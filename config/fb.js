console.log('btw, fb access token is:', process.env.FB_ACCESS_TOKEN);

module.exports = {
  'FB_ACCESS_TOKEN': process.env.FB_ACCESS_TOKEN || '',
}
