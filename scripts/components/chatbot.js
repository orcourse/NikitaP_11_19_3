let message = document.getElementById("content");
let send = document.getElementById("send");
let inputMessage = document.getElementById("chat-bot-textinput");
let close = document.getElementById("close");


setTimeout(() => {
document.getElementById("chat-bot").style.display = "block";
}, 20000);
let mymessage = document.getElementsByClassName("my-message");
setTimeout(() => {
  message.innerHTML +=
    "<div class='bot-message lang' key='chat-bot-phrase-one'>Hello! My name is Alice!</div>";
}, 25000);
setTimeout(() => {
  message.innerHTML += "<div class='bot-message lang' key='chat-bot-phrase-two'>What is your name?</div>";
}, 30000);

if (mymessage.length > 0) {
  setTimeout(() => {
    message.innerHTML += `<div class='bot-message'><span class='lang' key='chat-bot-phrase-three-dot-one'>Nice to meet you</span>, ${mymessage[0].innerHTML}!</div>`;
  }, 40000);

} else {
  setTimeout(() => {
    message.innerHTML += `<div class='bot-message lang' key='chat-bot-phrase-three-dot-two'>You don’t want to say your name, well, stay anonymous.</div>`;
  }, 40000);
}
setTimeout(() => {
  message.innerHTML += `<div class='bot-message lang' key='chat-bot-phrase-four'>May I help you?</div>
                          <div class='btnAnswer-container'>
                            <a class='btnAnswer lang' key='chat-bot-phrase-four-yes' id='yes'>Yes</a>
                            <a class='btnAnswer lang' key='chat-bot-phrase-four-no' id='no'>No, thanks</a>
                          </div>`;
  document.getElementById("yes").addEventListener("click", () => {
    message.innerHTML += `<div class="my-message lang" key='chat-bot-answer-one-yes' >Yes.</div>`;
    setTimeout(() => {
      message.innerHTML += `<div class='bot-message lang' key='chat-bot-phrase-five-dot-one'>Sorry, but at this point in time, my AI will not be able to do anything ((((</div>`;
    }, 5000);
  });
  document.getElementById("no").addEventListener("click", () => {
    message.innerHTML += `<div class="my-message lang" key='chat-bot-answer-one-no'>No, thanks.</div>`;
    setTimeout(() => {
      message.innerHTML += `<div class='bot-message lang' key='chat-bot-phrase-five-dot-two'>Ok!All the best.</div>`;
    }, 5000);
  });
}, 60000);

inputMessage.addEventListener("keypress", function(keyPressed) {
  if (keyPressed.which === 13) {
    message.innerHTML += `<div class="my-message">${inputMessage.value}</div>`;
    inputMessage.value = "";
  }
});
send.addEventListener("click", () => {
  message.innerHTML += `<div class="my-message">${inputMessage.value}</div>`;
  inputMessage.value = "";
});
document.getElementById("close").addEventListener("click", ()=> {
    document.getElementById("chat-bot").style.display = "none";
});
