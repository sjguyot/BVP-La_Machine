let workspace = document.getElementById('workspace');
let addBlockButton = document.getElementById('add-block');

// Fonction pour créer un nouveau bloc
function createBlock(x, y) {
  let block = document.createElement('div');
  block.classList.add('block');
  block.style.left = `${x}px`;
  block.style.top = `${y}px`;
  block.draggable = true;

  // Ajouter un connecteur
  let connector = document.createElement('div');
  connector.classList.add('connector');
  block.appendChild(connector);

  // Ajouter les événements de drag
  block.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
    setTimeout(() => block.classList.add('hidden'), 0);
  });

  block.addEventListener('dragend', (e) => {
    block.classList.remove('hidden');
    let rect = workspace.getBoundingClientRect();
    block.style.left = `${e.pageX - rect.left - 75}px`;
    block.style.top = `${e.pageY - rect.top - 25}px`;
  });

  workspace.appendChild(block);
}

// Ajouter un bloc au clic du bouton
addBlockButton.addEventListener('click', () => {
  createBlock(10, 10);
});