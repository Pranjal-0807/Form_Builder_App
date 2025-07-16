const router = require('express').Router();
const { getAllForms, createForm, getFormById, editFormById, deleteFormById, submitFormResponse } = require('../controllers/formController');

router.get('/forms', getAllForms);
router.get('/form/:id', getFormById);
router.post('/form/create', createForm);
router.put('/form/:id/edit', editFormById);
router.delete('/form/:id', deleteFormById);
router.post('/form/:id/submit', submitFormResponse);

module.exports = router;