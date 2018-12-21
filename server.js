const { router, get } = require('microrouter');

// const firebase = require('firebase/app');
// require('firebase/database');

// const config = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
// };

// firebase.initializeApp(config);
// const database = firebase.database();

// const query = database.ref('items');

// query.on('value', dataSnapshot => {
//   const v = dataSnapshot.val();
//   console.log(v);
// });

const price = async (req, res) => {
  const response = {
    price: 1123.19,
    details: {
      distance: 1432,
      duration: '12 horas 58 minutos',
      kmPrice: 1000.12,
      tollPrice: 123.07,
    },
  };
  res.end(JSON.stringify(response));
};

module.exports = router(get('/price', price));
