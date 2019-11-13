import angular from 'angular';
import template from './gifs.template.html';

angular
.module('single-spa-app')
.component('gifs', {
  template,
  controllerAs: 'vm',
  controller($http) {
    const vm = this;

    // this.createAWorklist = () => {
    //   const event = new CustomEvent('createAWorklist', { foo: 'bar' });
    //   document.dispatchEvent(event)
    // }
    // this.callOnEvent = () => {
    //   console.log('angularjs app heard open assessment and will do so');
    // };

    vm.$onInit = () => {
      // document.addEventListener('openAssessmentMounted', this.callOnEvent);
    };

    // vm.$onDestroy = () => {
    //   document.removeEventListener('createAWorklist', this.callOnEvent);
    // }
    // $http
    // .get('https://api.giphy.com/v1/gifs/search?q=ping+pong&api_key=dc6zaTOxFJmzC')
    // .then(response => {
    //   vm.gifs = response.data.data;
    // })
    // .catch(err => {
    //   setTimeout(() => {
    //     throw err;
    //   }, 0)
    // });
  },
});
