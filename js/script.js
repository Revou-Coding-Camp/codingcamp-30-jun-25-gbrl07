// Prompt for user name on load
window.addEventListener('load', () => {
    const name = prompt('Masukkan nama Anda:');
    if (name) document.getElementById('welcome-text').textContent = `Hi ${name}, Welcome To Website`;
});

// Display current time
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = `Current time : ${now.toString()}`;
}
setInterval(updateTime, 1000);
updateTime();

// Form handling
const form = document.getElementById('contactForm');
const output = document.getElementById('form-output');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    output.textContent =
        `Nama    : ${name}
Tanggal Lahir : ${dob}
Jenis Kelamin : ${gender}
Pesan        : ${message}`;

    form.reset();
});