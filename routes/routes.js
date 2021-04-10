const { Router } = require('express');
const { check, validationResult } = require('express-validator');

let router = Router();

router.get('/:paramTest',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        console.log(req.params.paramTest);
        res.status(200).json({ message: req.params.paramTest })
    })

router.post('/',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        console.log(req.body);
        res.status(201).json({ body: req.body })
    })

router.put('/',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        res.status(400).json({
            error: 'Error',
            message: 'Put test'
        })
    })

router.delete('/',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        console.log(req.query);
        res.status(200).json({ message: req.query })
    })

router.patch('/',
    [/*Validaciones check*/],
    (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        res.json({ message: 'Patch test' })
    })

module.exports = router