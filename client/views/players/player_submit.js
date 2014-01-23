Template.playerSubmit.helpers({
  displayName : function () {
    var user = Meteor.user();
    console.log(user);
    if (!user)
      return '';
    if (user.profile && user.profile.name)
      return user.profile.name;
    if (user.username)
      return user.username;
    return '';
  }
});

Template.playerSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    var player = {
      name: $(e.target).find('[name=name]').val()
    }
    Meteor.call('player', publishPlayer, function(error, id) {
      if (error)
        return alert(error.reason);
      // Router.go('postPage', {_id: id});
    });
  }
});