// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeToggle.textContent = 
      document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
}

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Chatbot
const chatToggle = document.getElementById("chatToggle");
const chatbot = document.getElementById("chatbot");
const chatBody = document.getElementById("chatBody");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

if (chatToggle) {
  chatToggle.addEventListener("click", () => {
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
  });
}

if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (!message) return;
    addMessage("You", message);
    userInput.value = "";

    // Fake AI response
    setTimeout(() => {
      const responses = [
        "That's an interesting question! 🚀",
        "We use AI to transform businesses intelligently.",
        "Our team specializes in ML, NLP, and automation.",
        "Can I connect you with our services page?"
      ];
      const reply = responses[Math.floor(Math.random() * responses.length)];
      addMessage("AI", reply);
    }, 1000);
  });
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${text}`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}
