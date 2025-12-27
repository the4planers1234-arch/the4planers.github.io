document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.getElementById("chat-btn");
  const chatPopup = document.getElementById("chat-popup");
  const closeChat = document.getElementById("close-chat");

  if (!chatBtn || !chatPopup) {
    console.error("Chat elements not found");
    return;
  }

  chatBtn.addEventListener("click", () => {
    chatPopup.classList.add("active");
  });

  closeChat.addEventListener("click", () => {
    chatPopup.classList.remove("active");
  });
});
