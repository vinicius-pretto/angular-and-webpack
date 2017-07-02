import './hello.css';
import template from './hello.html';

export default (ngModule) => {
  ngModule.directive('hello', ($log) => {
    return {
      restrict: 'E',
      scope: {

      },
      template: template,
      controllerAs: 'vm',
      controller: function() {
        let vm = this;

        vm.greeting = 'Hello Webpack';
        $log.info(vm.greeting);
      }
    }
  });
};
