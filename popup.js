function generatePrompts() {
  const theme = document.getElementById('theme').value;
  const actions = document.getElementById('actions').value.split(',');
  const backgrounds = document.getElementById('backgrounds').value.split(',');

  const prompts = [
    `A photograph of a ${theme} ${getAction(actions)} , ${getBackground(backgrounds)} during ${getTimeOfDay()} with ${getLighting()} lighting and shot with a ${getLensType()} lens, using a ${getCamera()} camera.`,
    `An image of a ${theme} , ${getBackground(backgrounds)} during ${getTimeOfDay()} using ${getLighting()} lighting and a ${getLensType()} lens, captured with a ${getCamera()} camera.`,
    `A photo of a ${theme} ${getAction(actions)} , ${getBackground(backgrounds)} during ${getTimeOfDay()} with ${getLighting()} lighting and shot with a ${getLensType()} lens on a ${getCamera()} camera.`,
    `A photography of a ${theme} during ${getTimeOfDay()} with ${getLighting()} lighting and using a ${getLensType()} lens on a ${getCamera()} camera , ${getBackground(backgrounds)} while ${theme} ${getAction(actions)}.`,
    `A shot of a ${theme} , ${getBackground(backgrounds)} during ${getTimeOfDay()} and ${getLighting()} lighting using a ${getLensType()} lens on a ${getCamera()} camera while ${theme} ${getAction(actions)}.`
  ];

  prompts.forEach((prompt) => {
    const promptContainer = document.createElement('div');
    promptContainer.className = 'prompt-container';

    const promptText = document.createElement('div');
    promptText.className = 'prompt-text';
    promptText.textContent = prompt;

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(prompt).then(() => {
        promptContainer.remove();
      });
    });

    promptContainer.appendChild(promptText);
    promptContainer.appendChild(copyButton);

    document.body.appendChild(promptContainer);
  });
}

function getAction(actions) {
  return actions[Math.floor(Math.random() * actions.length)];
}

function getBackground(backgrounds) {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

function getTimeOfDay() {
  const timesOfDay = ['morning', 'afternoon', 'evening', 'golden hour'];
  return timesOfDay[Math.floor(Math.random() * timesOfDay.length)];
}

function getLighting() {
  const lightings = ['natural', 'studio', 'ambient', 'spot', 'back', 'film', 'soft warm'];
  return lightings[Math.floor(Math.random() * lightings.length)];
}

function getLensType() {
  const lensTypes = ['wide-angle', 'normal', 'telephoto', 'macro'];
  return lensTypes[Math.floor(Math.random() * lensTypes.length)];
}

function getCamera() {
  const cameras = ['Canon EOS R5', 'Nikon Z7', 'Sony a7R IV', 'Fujifilm X-T4', 'Olympus', 'Sony Alpha a7 III', 'Hasselblad'];
  return cameras[Math.floor(Math.random() * cameras.length)];
}

document.getElementById('generate').addEventListener('click', generatePrompts);
