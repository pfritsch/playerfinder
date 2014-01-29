if (Players.find().count() === 0) {
  var now = new Date().getTime();

  // Create users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var pierreId = Meteor.users.insert({
    profile: { name: 'Pierre' }
  });
  var pierre = Meteor.users.findOne(pierreId);

  // Insert players
  var captainId = Players.insert({
    name: 'Captain America [US]',
    email: 'steve.rogers@yahoo.com',
    userId: sacha._id,
    submitted: now - 7 * 3600 * 1000
  });

  Players.insert({
    name: 'Peter Parker',
    email: 'peter@bugle.ny',
    userId: tom._id,
    submitted: now - 5 * 3600 * 1000
  });

  Players.insert({
    name: 'Bruce Banner',
    email: 'dr.banner@hulk.com',
    userId: pierre._id,
    submitted: now - 10 * 3600 * 1000
  });

  Games.insert({
    title: 'Dark Souls',
    platform: 'PS3',
    gamers: [],
    gamersNb: 0
  });

  Games.insert({
    title: 'Borderlands 2',
    platform: 'PS3',
    gamers: [],
    gamersNb: 0
  });
}