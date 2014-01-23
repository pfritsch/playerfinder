Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('players');
  }
});

Router.map(function() {
  this.route('playersList', {path: '/'});
  this.route('playerDetail', {
    path: '/players/:_id',
    data: function() { return Players.findOne(this.params._id); }
  });

});