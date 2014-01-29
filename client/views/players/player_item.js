Template.playerItem.helpers({
  emailLink: function() {
    return 'mailto:'+this.email;
  },
  ownPlayer: function() {
    return this.userId == Meteor.userId();
  },
  games: function() {
    return Games.find({gamers: this.userId});
  },
  gamesCount: function() {
    return Games.find({playerId: this._id}).count();
  }
});