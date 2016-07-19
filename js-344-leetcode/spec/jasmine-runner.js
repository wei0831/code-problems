/**
 * Authoer: Jack Chang
 * Data: 06/20/2016
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

jrunner.loadConfigFile('spec/support/jasmine.json');

jrunner.execute();
