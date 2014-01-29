Template.gameItem.helpers({
  selectedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.gamers, userId)) {
      return '';
    } else {
      return ' is-selected';
    }
  }
});

Template.gameItem.events({
  'click .game-choose': function(e) {
    e.preventDefault();
    Meteor.call('selectGame', this._id);
  }
});