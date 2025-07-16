const Form = require('../models/FormSchema');
const Response = require('../models/ResponseSchema'); 

exports.getAllForms = async (req, res) => {
    const forms = await Form.find();
    res.json(forms);
}

exports.createForm = async (req, res) => {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
}

exports.getFormById = async (req, res) => {
    const form = await Form.findById(req.params.id);
    if (form) {
        res.json(form);
    } else {
        res.status(404).send('Form not found');
    }
}

exports.editFormById = async (req, res) => {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedForm);
}

exports.deleteFormById = async (req, res) => {
    await Form.findByIdAndDelete(req.params.id);
    res.status(204).send();
}

exports.submitFormResponse = async (req, res) => {
    const newResponse = new Response({
        formId: req.params.id,
        responses: req.body,
    });
    await newResponse.save();
    res.status(201).send('Response saved');
} 