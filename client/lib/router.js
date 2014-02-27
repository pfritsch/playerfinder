Router.configure({
  layoutTemplate: 'layout'
  // loadingTemplate: 'loading',
  // waitOn: function() {
  //   return [Meteor.subscribe('players'), Meteor.subscribe('games')]
  // }
});

Router.map(function() {
  this.route('players', {
    path: '/'
  });
  this.route('playerDetail', {
    path: '/players/:_id',
    data: function() { return Players.findOne(this.params._id); }
  });
  // this.route('playerSubmit', {
  //   path: '/submit-player'
  // });

  this.route('gamesList', {
    path: '/games'
  });
  // this.route('gameDetail', {
  //   path: '/games/:_id',
  //   data: function() { return Games.findOne(this.params._id); }
  // });
  // this.route('gameSubmit', {
  //   path: '/submit-game'
  // });
});

// var requireLogin = function() {
//   if (! Meteor.user()) {
//     if (Meteor.loggingIn())
//       this.render(this.loadingTemplate);
//     else
//       this.render('errors');
//     this.stop();
//   }
// }
// Router.before(requireLogin, {only: 'playerSubmit'});

// Router.before(function() { clearErrors() });