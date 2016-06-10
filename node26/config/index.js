var configValues = require('./config');

module.exports = {

  getDbconnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds013014.mlab.com:13014/nodetodo' ;
  }
  
};
