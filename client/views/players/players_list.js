Template.playersList.helpers({
  players: function() {
    return Players.find();
  }
});