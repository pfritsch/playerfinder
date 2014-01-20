var playersData = [
  {
    name: 'Steve Rogers',
    email: 'steve@hotmail.com'
  }, 
  {
    name: 'Peter Parker',
    email: 'peter@bugle.ny'
  }, 
  {
    name: 'Bruce Banner',
    email: 'dr.banner@hulk.com'
  }
];
Template.playersList.helpers({
  players: playersData
});