const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const { Usuario } = require('../db/usuario');

let router = Router();

router.get('/',
    [/*Validaciones check*/],
    async (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        let objetos = await Usuario.findAll();

        res.status(200).json(objetos)
    })

router.get('/:id',
    [/*Validaciones check*/],
    async (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        console.log(req.params.id);
        let usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ errors: [{ message: 'Recurso no existe' }] })
        }
    })

router.post('/',
    [/*Validaciones check*/],
    async (req, res) => {
        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        try {

            const usuario = new Usuario(req.body);
            await usuario.save();

            console.log(req.body);
            res.status(201).json(usuario);
        } catch (err) {
            res.status(500).json(err);
        }
    })

router.put('/:id',
    [/*Validaciones check*/],
    async (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        try {
            let usuario = await Usuario.findByPk(req.params.id);
            if (usuario) {
                await usuario.update(req.body);
                res.status(200).json(usuario);
            } else {
                res.status(400).json({ errors: [{ message: 'Usuario no existe' }] })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    })

router.delete('/:id',
    [/*Validaciones check*/],
    async (req, res) => {

        //Resultados de Validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        try {
            let usuario = await Usuario.findByPk(req.params.id);
            if (usuario) {
                await usuario.destroy();
                res.status(200).json(usuario);
            } else {
                res.status(400).json({ errors: [{ message: 'Usuario no existe' }] })
            }
        } catch (err) {
            res.status(500).json(err)
        }
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