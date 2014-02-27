Template.players.helpers({
  // players: function() {
  //   return Players.find({}, {sort: {submitted: -1}});
  // }
});

PlayersFilter = new Meteor.FilterCollections(Players, {
  name: 'players-full',
  template: 'players',
  filters: {
    "pseudo": {
      title: 'pseudo',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'required'
    }
  }
});