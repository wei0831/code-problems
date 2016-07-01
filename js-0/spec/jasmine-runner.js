/**
 * @author Jack Chang
 */

var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var noop = function() {};
var jrunner = new Jasmine();
jrunner.configureDefaultReporter({
    print: noop
});

jasmine.getEnv().addReporter(new SpecReporter({
    displayStacktrace: "none"
}));

jrunner.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'spec*.js'
    ],
    helpers: [],
    stopSpecOnExpectationFailure: false,
    random: false
});

jrunner.execute();
