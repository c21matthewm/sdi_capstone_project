const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

app.get('/', (req, res) =>{
  res.send(`Application up and running on port ${port}`)
})

app.get('/satellites', (req, res) =>{
  knex('satellites')
    .select('*')
    .orderBy('satelliteID', 'asc')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/reports', (req, res) =>{
  knex('reports')
    .select('*')
    .orderBy('reportID', 'asc')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/users', (req, res) =>{
  knex('users')
    .select('*')
    .orderBy('userID', 'asc')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/users/:uid', (req, res) =>{
  knex('users')
    .select('*')
    .where("uid", req.params.uid)
    .orderBy('userID', 'asc')
    .then(data => {
      res.status(200).json(data);
    })
})


app.get('/satellites/:satelliteID', (req, res) =>{
  knex('satellites')
    .select('*')
    .where("satelliteID", req.params.satelliteID)
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/reports/:reportID', (req, res) =>{
  knex('reports')
    .select('*')
    .where("reportID", req.params.reportID)
    .then(data => {
      res.status(200).json(data);
    })
})

app.post('/reports', async(req, res) => {
  await knex('reports').insert({
      time: req.body.time,
      frequency_band: req.body.frequency_band,
      mission: req.body.mission,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      userID: req.body.userID,
      satelliteID: req.body.satelliteID,
      status: req.body.status,
      reason: req.body.reason
      })
      .then(() => {
          knex.select()
              .from('reports')
              .then(data => res.status(200).json(data));
      });
  }
);


app.post('/satellites', async(req, res) => {
  await knex('satellites').insert({
      name: req.body.name,
      longitude: req.body.longitude,
      status: req.body.status,
      image: req.body.image,
      favorites: req.body.favorites,
      })
      .then(() => {
          knex.select()
              .from('satellites')
              .then(data => res.status(200).json(data));
      });
  }
);


app.post('/users', async(req, res) => {
  await knex('users').insert({
      email: req.body.email,
      unit: req.body.unit,
      admin: req.body.admin,
      uid: req.body.uid,
      name: req.body.name
      })
      .then(() => {
          knex.select()
              .from('users')
              .then(data => res.status(200).json(data));
      });
  }
);


app.get('/reports/satellites/:satelliteID', (req, res) =>{
  knex('reports')
    .select('*')
    .where("satelliteID", req.params.satelliteID)
    .then(data => {
      res.status(200).json(data);
    })
})


app.patch('/satellites/:satelliteID', async(req, res) => {
  await knex('satellites')
  .where('satelliteID', req.params.satelliteID)
  .update({
    name: req.body.name || null,
    longitude: req.body.longitude || null,
    status: req.body.status || null,
  })
  .then(() => {
    knex('satellites')
    .where('satelliteID', req.params.satelliteID)
    .select("*")
    .then(data => res.json(data))});
})

app.patch('/satellites/favorites/:satelliteID', async(req, res) => {
  await knex('satellites')
  .where('satelliteID', req.params.satelliteID)
  .update({
    favorites: req.body.favorites || null
  })
  .then(() => {
    knex('satellites')
    .where('satelliteID', req.params.satelliteID)
    .select("*")
    .then(data => res.json(data))});
})


// app.put('/satellites/:satelliteID', (req, res) => {
//   knex('satellites')
//   .where('satelliteID', req.params.satelliteID)
//   .update({
//     name: req.body.name,
//     longitude: req.body.longitude,
//     status: req.body.status,
//     favorites: req.body.favorites
//   })
//   .then(() => {
//     knex('satellites')
//     .where('satelliteID', req.params.satelliteID)
//     .select("*")
//     .then(data => res.json(data))});
// })


app.patch('/satellites/status/:satelliteID', (req, res) => {
  knex('satellites')
  .where('satelliteID', req.params.satelliteID)
  .update({
    status: req.body.status
  })
  .then(() => {
    knex('satellites')
    .where('satelliteID', req.params.satelliteID)
    .select("*")
    .then(data => res.json(data))});
})