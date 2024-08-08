const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', auth, async (req, res) => {
  const { name, description, price, imageURL } = req.body;
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      imageURL,
      createdBy: req.user.id,
    });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/:id', auth, async (req, res) => {
  const { name, description, price, imageURL } = req.body;
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });

    if (product.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    product = await Product.findByIdAndUpdate(req.params.id, { name, description, price, imageURL }, { new: true });
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });

    if (product.createdBy.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Product.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Product removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
