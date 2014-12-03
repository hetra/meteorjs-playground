Songs = new Mongo.Collection("songs");

if (Meteor.isClient) {
  Template.body.helpers({
      songs: function() {
        return Songs.find({});
      }
    });

    Template.body.events({
    "submit .new-song": function(event){
      // create new song

      var title = event.target.title.value;
      var url = event.target.url.value;

      Songs.insert({
        title: title,
        url: url
      });

      // clear the form
      event.target.title.value = "";
      event.target.url.value = "";

      // prevent default form submission
      return false;
    }
});
}