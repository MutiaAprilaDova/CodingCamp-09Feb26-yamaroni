// --- WELCOME POPUP ---
function welcomeMessage() {
    let name = prompt("Welcome to Mutia Company! What is your name?");
    if (name == null || name.trim() === "") {
        name = "Guest";
    }
    const welcomeEl = document.getElementById("welcome-speech");
    if (welcomeEl) {
        welcomeEl.innerText = `Hello, ${name}! Welcome to Mutia Company.`;
    }
}

// Run welcome popup when page loads
window.onload = welcomeMessage;

// --- FORM SUBMISSION ---
function submitForm() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("messageInput").value;

    const now = new Date();
    document.getElementById("currentTime").innerText = "Current time: " + now.toString();

    document.getElementById("resultName").innerText = name || "-";
    document.getElementById("resultDate").innerText = date || "-";
    document.getElementById("resultGender").innerText = gender ? gender.value : "-";
    document.getElementById("resultMessage").innerText = message || "-";
}

// Attach event listener to submit button
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", submitForm);
}
