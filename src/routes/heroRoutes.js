const express = require('express');
const router = express.Router();

router.get('/spiderMan', (req, res) => {
  res.json({
    name: 'Spider-Man',
    description: 'Peter Parker, a superhero who gained spider-like abilities after being bitten by a radioactive spider.'
  });
});

module.exports = router;