import { Router } from 'express';
import db from '../utils/postgres.js';


const router = Router();

router.get('/', (req, res) => {
  res.json({
    name: "getUserList",
    status: 'ok',
  });
});

// create
router.post('/', (req, res) => {

  const query = {
    text: 'INSERT INTO users(name, fsdemail) VALUES($1, $2)',
    values: ['太郎', 'mytest@samplel.com'],
  }
  db.query(query, (err, data) => {
    if (err) {
      res.json({
        status: 'error',
        error: err.message
      });
    } else {
      res.json({
        status: 'ok',
      });
    }
  })

});

// update
router.patch('/:id', (req, res) => {
  res.json({
    name: "updateUser",
    status: 'ok',
  });
});

export { router as usersRouter };
