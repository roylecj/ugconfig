Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
           Meteor.subscribe('languageCodes')
         ];
  }
});

Router.route('/', {name: 'login'});
Router.route('/home', {name: 'home'});
