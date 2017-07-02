import angular from 'angular';
import registerDirectives from './directives/index.js';

const ngModule = angular.module('app', []);

registerDirectives(ngModule);