Template.gamesList.helpers({
  games: function() {
    return Games.find({playerId: this._id});
  }
});