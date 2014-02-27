Template.gamesList.helpers({
  platforms: function(){
    return [
      {
        label: 'ps3',
        field: 'platform',
        value: 'ps3',
        operator: '$gt',
        sort: 'desc'
      },
      {
        label: 'Xbox 360',
        field: 'platform',
        value: 'Xbox 360',
        operator: '$lt'
      }
    ];
  }
});

GamesFilter = new Meteor.FilterCollections(Games, {
  name: 'games-full',
  template: 'gamesList',
  filters: {
    "title": {
      title: 'Title',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'required'
    },
    "platform": {
      title: 'Platform',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'optional'
    }
  }
});
