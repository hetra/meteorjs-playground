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

      Meteor.call("addSong", title, url);

      // clear the form
      event.target.title.value = "";
      event.target.url.value = "";

      // prevent default form submission
      return false;
    }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

}

Meteor.methods({
  addSong: function(title, url){
    if(!Meteor.userId()){
      throw new Meteor.Error("not-authorized");
    }

  Songs.insert({
    title: title,
    url: url
  });

  }
});