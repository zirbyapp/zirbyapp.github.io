var conversation;

GET /contact HTTP/1.1
Host: api2.frontapp.com
Authorization : Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiY29tcGFueSIsImNvbXBhbnkiOiJ6aXJieSJ9.U_vOaYwd-zSLXfuiyjHAVDjbNb-RbgS6j8LcAT3DUsw>

function fetchNotes() {
  Front.fetchNotes(function (notes) {

    console.log(notes);
  });
}

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


Front.on('no_conversation', function () {
    // triggered when no conversation is selected
});

Front.on('panel_visible', function (visible) {
    // triggered when your plugin becomes visible or invisible
    // you can also test Front.visible
});
