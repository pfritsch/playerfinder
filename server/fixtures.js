if (Players.find().count() === 0) {
  Players.insert({
    name: 'Steve Rogers',
    email: 'steve@hotmail.com'
  });
  Players.insert({
    name: 'Peter Parker',
    email: 'peter@bugle.ny'
  });
  Players.insert({
    name: 'Bruce Banner',
    email: 'dr.banner@hulk.com'
  });
}