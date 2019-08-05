const express = require('express');



const Hubs = require('./data/hubs-model.js');


const server = express();

server.use(express.json()); // <<<<<<<<<< add this line to teach express to 


server.get('/', (req, res) => {
    res.send('hello web 20.75');
});


server.get('/hubs', (req, res) => {
    Hubs.find()
    .then(hubs => {
        res.status(200).json(hubs);
    })
    .catch(error => {
      res.status(500).json({message: 'error getting the list of hubs'});
    });
});





server.post('/hubs', (req, res) => {

    const hubsInformation = req.body;
    console.log('hub info from body', hubsInformation);
    Hubs.add(hubsInformation).then(result => {
        res.status(201).json(hub);
    })
    .catch(error => {
        res.status(500).json({message: 'error adding the hub'})
    })
})






server.delete('/hubs/:id', (req, res) => {
    const hubID = req.params.id;

    Hubs.remove(hubID)
    .then(hub => {
        res.status(200).json({message: 'hub deleted successfully'});

    })
    .catch(error => {
        res.status(500).json({message: 'error removing the hub'});
    });
});

const port = 8000;
server.listen(port, () => console.log('api runnning'));
  