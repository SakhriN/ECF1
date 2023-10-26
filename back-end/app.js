const express = require('express');
const fs = require('fs');
const app = express();
const port = 2103 ;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const testData = JSON.parse(fs.readFileSync('test.json'));

app.get('/projects', (req, res)=> {
res.json(testData)
})


app.post('/projects', (req, res) => {
        const newProject = req.body;
        testData.test.push(newProject);
        fs.writeFileSync('test.json', JSON.stringify(testData, null, 2));
        res.status(201).json(newProject);
})


app.get('/project/:id', (req, res) =>{
    const projectId = parseInt(req.params.id);
    const test = testData.test.find(project => project.id === projectId);
    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ message: 'project non trouvée' });
    }
})




app.patch('/project/:id', (req, res) =>{
    const projectId = parseInt(req.params.id);
  const updatedData = req.body; // Les données de mise à jour doivent être dans le corps de la demande au format JSON

  // Recherche du projet correspondant dans la liste des projets
  const projectToUpdate = testData.test.find(project => project.id === projectId);

  if (!projectToUpdate) {
    // Si le projet n'est pas trouvé, renvoyez une réponse d'erreur
    return res.status(404).json({ error: 'Project non trouvé' });
  }

  // Mettez à jour les propriétés du projet avec les nouvelles données
  Object.assign(projectToUpdate, updatedData);

  // Renvoyez une réponse indiquant que la mise à jour a réussi
  res.status(200).json({ message: 'Projet mis à jour avec succès', updatedProject: projectToUpdate });
  console.log(testData)
  fs.writeFileSync('test.json', JSON.stringify(testData, null, 2));
});

app.delete('/project/:id', (req, res) =>{
    const projectId = parseInt(req.params.id);
    const index = testData.test.findIndex(project => project.id === projectId);
    if (index === -1) {
      return res.status(404).json({ message: 'Project non trouvée' });
    }
    testData.test.splice(index, 1);
    console.log(testData)
    fs.writeFileSync('test.json', JSON.stringify(testData, null, 2));
    console.log(testData)
})





app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });