Meteor.FilterCollections.publish(Players, {
  name: 'players-full'
});

Meteor.FilterCollections.publish(Games, {
  name: 'games-full'
});

Meteor.startup(function () {

  if (Games.find().count() === 0) {
    //adds arbitrary data.  change this for different filterable columns
    var wordFirst = ['Epic', 'Dark', 'Black', 'Green', 'Evil', 'Call of', 'Red', 'Portal', 'Mass', 'The', 'Assassin\'s', 'Tom Cancy\'s'];
    var wordEnd = ['Duck', 'Life', 'Strike', 'Blood', 'Brothers', 'Sam', 'Mario', '2030', 'Robot', 'Dead', 'of Duty', '2', '3', 'Creed', 'from Hell'];
    var platform = ['ps3', 'ps4', 'Xbox 360', 'Xbox One', 'PC', 'Mac', 'Wii U'];

    var new_game = new Array();
    for (var i = 0; i < 50; i++) {
        new_game[i] = Games.insert({
        title: wordFirst[Math.floor(Math.random() * (wordFirst.length - 1))]+' '+wordEnd[Math.floor(Math.random() * (wordEnd.length - 1))],
        platform: platform[Math.floor(Math.random() * (platform.length - 1))]
      });
    }
  }

  if (Players.find().count() === 0) {
    var now = new Date().getTime();

    // Create users
    var pierreId = Meteor.users.insert({
      profile: { name: 'Pierre Fritsch' },
      password: '1234'
    });
    var pierre = Meteor.users.findOne(pierreId);

    var samId = Meteor.users.insert({
      profile: { name: 'Samuel Fritsch' },
      password: '1234'
    });
    var sam = Meteor.users.findOne(samId);

    var nameFirst = ['Tom', 'Sam', 'Oliver', 'James', 'Peter', 'Dead', 'Captain'];
    var nameEnd = ['209', 'the_Kill3r', '_SH0T', '42', '[US]', '', ''];

    var new_player = new Array();
    for (var i = 0; i < 50; i++) {
      var pseudo = nameFirst[Math.floor(Math.random() * (nameFirst.length - 1))]+nameEnd[Math.floor(Math.random() * (nameEnd.length - 1))];
      new_player[i] = Players.insert({
        pseudo: pseudo,
        email: pseudo+'@test.com',
        userId: Math.random() < 0.5 ? samId : pierreId,
        submitted: now - 7 * 3600 * 1000,
        gender: Math.random() < 0.5 ? 'Male' : 'Female',
        character: {
          discuss: Math.random() < 0.5 ? true : false,
          coop: Math.random() < 0.5 ? true : false,
          compet: Math.random() < 0.5 ? true : false
        },
        contact: {
          skype: pseudo,
          twitter: '@'+pseudo,
          steam: '',
          psn: pseudo,
          xlive: pseudo 
        },
        player_games: [new_game[Math.floor(Math.random() * (new_game.length - 1))], new_game[Math.floor(Math.random() * (new_game.length - 1))], new_game[Math.floor(Math.random() * (new_game.length - 1))]]
      });      
    }
  }

});