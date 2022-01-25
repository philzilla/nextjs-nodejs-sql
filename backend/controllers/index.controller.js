// GET('/')
exports.getIndexPage = async (req, res) => {

  const thes  = await querySQL( 'SELECT * FROM the')
  try {
    res.json(thes);
  } catch (e) {
    res.send(e)
  }
};

// POST('/ajoutthe')
exports.postAjoutPage = async (req, res) => {
  console.log(req);
  const ajoutThes  = await querySQL( `INSERT INTO the (nom) VALUES ('${req.body.nom}');`)
  try {
    res.status(201).json(
      // {"message": "success"}
     ajoutThes
    );
  } catch (e) {
    res.send(e)
  }
};

