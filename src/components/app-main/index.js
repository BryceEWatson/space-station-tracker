var app = require('src/app');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            location: input.location
        };
    },
    getTemplateData: function(state, input) {
        return {
            location: state.location
        };
    }
});