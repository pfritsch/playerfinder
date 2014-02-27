Players = new Meteor.Collection('players');

// Players.allow({
//   update: ownsDocument,
//   remove: ownsDocument
// });

// Meteor.methods({
//   player: function(playerAttributes) {
//     var
//       user = Meteor.user(),
//       playerFromSameUser = Players.findOne({userId: user._id});

//     // ensure the user is logged in
//     if (!user)
//       throw new Meteor.Error(401, "Sorry dude, you need to login to publish a profile");

//     // ensure the player has a name
//     if (!playerAttributes.name)
//       throw new Meteor.Error(422, 'Please give us your pseudo, even if it\'s ridiculous... We won\'t judge you');

//     // just one player / user
//     if (playerAttributes.name && playerFromSameUser) {
//       // throw new Meteor.Error(302, 'Your profile is already published');
//       var currentPlayerId = playerFromSameUser._id;
//       Players.update(currentPlayerId, {$set: playerAttributes}, function(error) {
//         if (error)
//           alert(error.reason);
//       });
//       return playerId;
//     }

//     // pick out the whitelisted keys
//     var newPlayer = _.extend(_.pick(playerAttributes, 'name'), {
//       userId: user._id,
//       submitted: new Date().getTime()
//     });

//     var playerId = Players.insert(newPlayer);
//     return playerId;
//   }
// });