Template.playerSubmit.helpers({
  displayName : function () {
    var user = Meteor.user();
    if (!user)
      return '';
    if (user.profile && user.profile.name)
      return user.profile.name;
    if (user.username)
      return user.username;
    return '';
  },
  profileIsOnline : function () {
    return Players.findOne({userId: Meteor.user()._id});
  },
  games: function() {
    return Games.find();
  }
});

Template.playerSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var player = {
      name: $(e.target).find('[name=playerName]').val()
    }
    Meteor.call('player', player, function(error, id) {
      clearErrors();
      if (error)
        throwError(error.reason);
      Router.go('players', {_id: id});
    });
  },

  'click .delete': function(e) {
    e.preventDefault();
    var currentPlayer = Players.findOne({userId: Meteor.user()._id});
    if (confirm("Remove your profile from the list?")) {
      Players.remove(currentPlayer._id);
      // Router.go('playersList');
    }
  }
});