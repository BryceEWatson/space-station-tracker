var app = require('src/app');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            lat: input.lat,
            lng: input.lng
        };
    },
    getTemplateData: function(state, input) {
        return {
            lat: state.lat,
            lng: state.lng
        };
    },
    init: function() {
        setInterval(function() {
            app.getLocation();
        }, 3000);
    }
});