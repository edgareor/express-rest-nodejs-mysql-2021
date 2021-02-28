const { Router } = require('express');

let router = Router();

router.get('/:paramTest', function (req, res) {
    console.log(req.params.paramTest);
    res.json({ message: req.params.paramTest })
})

router.post('/', function (req, res) {
    console.log(req.body);
    res.status(201).json({ body: req.body })
})

router.put('/', function (req, res) {
    res.status(400).json({
        error: 'Error',
        message: 'Put test'
    })
})

router.delete('/', function (req, res) {
    console.log(req.query);
    res.json({ message: req.query })
})

router.patch('/', function (req, res) {
    res.json({ message: 'Patch test' })
})

module.exports = router