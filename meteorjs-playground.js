if (Meteor.isClient) {
  Template.body.helpers({
      songs: [
        { title: "I Get Around", url: "https://www.youtube.com/watch?v=YqJAnQTwmJs" },
        { title: "All Eyez On Me", url: "https://www.youtube.com/watch?v=05PCmqjIeNE" },
        { title: "Check Out Time", url: "https://www.youtube.com/watch?v=UAI4VJ-M230" },
        { title: "Only God Can Judge Me", url: "https://www.youtube.com/watch?v=padvnsLUhUM" },
        { title: "Who Do You Believe In?", url: "https://www.youtube.com/watch?v=_z2nfa1X9Kc" },
        { title: "Can You Get Away", url: "https://www.youtube.com/watch?v=96LqAdngoCs" },
        { title: "Troublesome '96", url: "https://www.youtube.com/watch?v=RdX79pwyBII" }
      ]
    });
}
