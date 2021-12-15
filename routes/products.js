//  Express Router Setup
const express = require('express');
const router = express.Router();

//  Import Controllers
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProduct} = require('../controllers/products');

//router.get('/', getThing);
//router.post('/', createThing);
//router.post('/postman', createThing);
//router.put('/', updateThing);
//router.delete(':id', deleteThing);

//OR

//router.route('/').get((req,res) => {
//    res.send('All items)
//}).post(updateTask);

//router.route('/').get(getAllTasks);
//router.route('/postman').post(createPostmanThing);
//router.route('/:id').get(updateThing).delete(deleteThing);

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router; 