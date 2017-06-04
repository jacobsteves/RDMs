// JavaScript

var ready = function () {

    //
    // When the send message link on our home page is clicked
    // send an ajax request to our rails app with the sender_id and
    // recipient_id
    //

    $('.start-conversation').click(function (e) {
        e.preventDefault();

        var sender_id = $(this).data('sid');
        var recipient_id = $(this).data('rip');

        $.post("/conversations", { sender_id: sender_id, recipient_id: recipient_id }, function (data) {
            chatBox.chatWith(data.conversation_id);
        });
    });

    //
    // Minimizes the chatbox
    //

    $(document).on('click', '.toggleChatBox', function (e) {
        e.preventDefault();

        var id = $(this).data('cid');
        chatBox.toggleChatBoxGrowth(id);
    });

    //
    // Closes the chatbox
    //

    $(document).on('click', '.closeChat', function (e) {
        e.preventDefault();

        var id = $(this).data('cid');
        chatBox.close(id);
    });


    //
    // Listen on keypress' in our chat textarea and call the
    // chatInputKey in chat.js to inspect
    //

    $(document).on('keydown', '.chatboxtextarea', function (event) {

        var id = $(this).data('cid');
        chatBox.checkInputKey(event, $(this), id);
    });

    //
    // When a conversation link is clicked then the respective
    // conversation chatbox pops up
    //

    $('a.conversation').click(function (e) {
        e.preventDefault();

        var conversation_id = $(this).data('cid');
        chatBox.chatWith(conversation_id);
    });


}

//
// Page listeners
//
$(document).ready(ready);
$(document).on("page:load", ready);
