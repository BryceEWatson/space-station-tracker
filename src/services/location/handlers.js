var http = require('http');

module.exports = {
    getLocation: function(args, callback) {
        http.get('http://api.open-notify.org/iss-now.json', (res) => {
            var body = '';
            res.on('data', function(chunk) {
              body += chunk;
            });
            res.on('end', function() {
                callback(null, {
                    location: JSON.parse(body)
                });
            });
        }).on('error', (e) => {
            console.log(`Error getting location: ${e.message}`);
        });
    }
};
