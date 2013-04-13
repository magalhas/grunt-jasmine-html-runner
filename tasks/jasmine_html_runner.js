"use strict";
var _ = require("lodash"),
    JasmineHtmlRunner = require("jasmine-html-runner");
module.exports = function(grunt) {
    /**
     * @todo Validate if configFile is set
     */
    grunt.registerMultiTask("jasmine_html_runner", "Runs jasmine html runner using phantomjs.", function () {
        var done = this.async(),
            options = this.options({
                configFile: undefined,
                onFinish: function () {
                    done();
                }
            }),
            jasmineHtmlRunner;
        options = _.defaults(options, require(options.configFile));
        jasmineHtmlRunner = new JasmineHtmlRunner(options);
        jasmineHtmlRunner.start();
    });
};