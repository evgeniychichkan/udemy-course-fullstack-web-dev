var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'ltsadfluer' }, function(err, tunnel) {
  console.log('LT running')
});