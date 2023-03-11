const downloadBtn = document.querySelector('.btn-primary');
downloadBtn.addEventListener('click', () => {
  // Création d'un objet URL pour le fichier à télécharger
  const fileUrl = URL.createObjectURL(new Blob(["GOWR.exe"], { type: 'application/octet-stream' }));
  // Création d'un élément <a> pour télécharger le fichier
  const downloadLink = document.createElement('a');
  downloadLink.href = fileUrl;
  downloadLink.setAttribute('download', 'GOWR.exe');
  // Ajout de l'élément <a> à la page pour le téléchargement
  document.body.appendChild(downloadLink);
  // Clic programmé sur l'élément <a> pour déclencher le téléchargement
  downloadLink.click();
  // Suppression de l'élément <a> pour éviter les fuites de mémoire
  document.body.removeChild(downloadLink);
});
