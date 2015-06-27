'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app',['ngRoute',"xeditable"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});