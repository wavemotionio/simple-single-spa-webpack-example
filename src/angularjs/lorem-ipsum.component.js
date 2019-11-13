import angular from 'angular';
import template from './lorem-ipsum.template.html';

angular
.module('single-spa-app')
.component('loremIpsum', {
  template,
  controllerAs: 'vm',
  controller($stateParams) {
    const vm = this;

    // vm.frameworkInspector = false;
    vm.styles = {};
    // let subscription;

    vm.$onInit = () => {
    	// console.log('here', $stateParams, location.search);

    	vm.stateExample = parseInt($stateParams.assessmentId, 0) + 10;
      // subscription = showFrameworkObservable.subscribe(
      //   frameworkInspector => {
      //     $timeout(() => {
      //       vm.styles = frameworkInspector ? {border: getBorder('angularjs')} : {};
      //       vm.frameworkInspector = frameworkInspector;
      //     });
      //   }
      // );
    };

    vm.$onDestroy = () => {
      // subscription.dispose();
    }
  }
});
