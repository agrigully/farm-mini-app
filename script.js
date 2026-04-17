function openModule(title, icon) {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('module-view').classList.remove('hidden');
    document.getElementById('module-title').innerText = icon + " " + title;
}

function showDashboard() {
    document.getElementById('module-view').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
}
