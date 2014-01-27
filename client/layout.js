Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); },
  username: function() { return Meteor.user().username; }
});

// Deps.autorun(function() {
//   if(Session.get('message') != undefined) alert(Session.get('message'));
// });