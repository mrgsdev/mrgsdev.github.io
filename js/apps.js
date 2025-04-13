const appsData = [
    {
        name: "NOTODES",
        icon: "../img/my apps/Notodes.png",
        desc: "NOTODES is a simple note-taking app for writing thoughts, to-do lists",
        tags: "UIKit · Firebase",
        repo: "https://gitlab.com/mrgsdev/notodes"
    },
    {
        name: "Animal Checker",
        icon: "../img/my apps/AnimalChecker.png",
        desc: "A simple and easy-to-use application for identifying animal species based on photos.",
        tags: "UIKit · CoreML · R.Swift · Lottie",
        repo: "https://gitlab.com/mrgsdev/animalchecker"
    }
];

const appGrid = document.querySelector('.app-grid');

appsData.forEach(app => {
    const appCard = document.createElement('div');
    appCard.classList.add('app-card');

    appCard.innerHTML = `
      <img class="app-icon" src="${app.icon}" alt="${app.name}" />
      <div class="app-name">${app.name}</div>
      <div class="app-desc">${app.desc}</div>
      <div class="app-tags">${app.tags}</div>
      <a href="${app.repo}" target="_blank" rel="noopener noreferrer" class="repo-link">My Repository</a>
    `;

    appGrid.appendChild(appCard);
});