Players = new Meteor.Collection('players');

// Players.allow({
//   insert: function(userId, doc) {
//     return !! userId;
//   }
// });

Meteor.methods({
  publishPlayer: function(playerAttributes) {
    var user = Meteor.user(),
    playerWithSameName = Players.findOne({name: playerAttributes.playerName});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

    // ensure the player has a name
    if (!playerAttributes.playerName)
      throw new Meteor.Error(422, 'Please give us a name, it can be a pseudo ;)');

    // check that there are no previous players with the same name
    if (playerAttributes.playerName && playerWithSameName) {
      throw new Meteor.Error(302,
        'This name is already used',
        playerWithSameName._id);
      }

    // pick out the whitelisted keys
    var newPlayer = _.extend(_.pick(playerAttributes, 'playerName'), {
      userId: user._id,
      submitted: new Date().getTime()
    });

    var playerId = Players.insert(newPlayer);
    return postId;
  }
});