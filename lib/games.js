Games = new Meteor.Collection('games');

// Games.allow({
//   update: ownsDocument,
//   remove: ownsDocument
// });

// Meteor.methods({
  // selectGame: function(gameId) {
  //   var user = Meteor.user();
  //   // ensure the user is logged in
  //   if (!user)
  //     throw new Meteor.Error(401, "You need to login to choose a game");
  //   var game = Games.findOne(gameId);
  //   if (!game)
  //     throw new Meteor.Error(422, 'Game not found');
  //   if (_.include(game.gamers, user._id)){
  //     Games.update(game._id, {
  //       $pull: {gamers: user._id},
  //       $inc: {gamersNb: -1}
  //     });
  //   } else {
  //     Games.update(game._id, {
  //       $addToSet: {gamers: user._id},
  //       $inc: {gamersNb: 1}
  //     });  
  //   }
  // }
// });