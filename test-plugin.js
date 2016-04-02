var conversation;

function FetchContact() {
  Front.on('conversation', function (data) {
    console.log('Contact', data.contact);
    // triggered when a conversation is loaded
  });
}

Front.on('conversation', function (data) {
  console.log('Conversation', data.conversation);
  console.log('Contact', data.contact);
  console.log('Message', data.message);
  console.log('OtherMessages', data.otherMessages);
  conversation = data.conversation;
});