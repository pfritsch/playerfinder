Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});

// Deps.autorun(function() {
//   if(Session.get('message') != undefined) alert(Session.get('message'));
// });