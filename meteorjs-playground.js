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

	  // map form fields to local variables
      var title = event.target.title.value;
      var url = event.target.url.value;
	  var description = event.target.description.value;

      Meteor.call("addSong", title, url); // add the song

      // clear the form
      event.target.title.value = "";
      event.target.url.value = "";
      event.target.description.value = "";

      // prevent default form submission
      return false;
    }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

}

Meteor.methods({
  addSong: function(title, url, description){ // the song's title, url, and description
    if(!Meteor.userId()){
      throw new Meteor.Error("not-authorized");
    }

  // insert into db
  Songs.insert({
    title: title,
    url: url,
	description: description
  });

  }
});