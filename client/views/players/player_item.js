Template.playerItem.helpers({
  emailLink: function() {
    return 'mailto:'+this.email;
  },
  ownPlayer: function() {
    return this.userId == Meteor.userId();
  },
});