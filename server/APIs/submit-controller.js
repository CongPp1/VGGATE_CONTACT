const submitService = require('./submit-service.js');

const addSubmit = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        console.log('req.body', req.body);
        // if(!username || !email || !message){
        //     return res.status(400).send({ message: 'Please enter a username, email or message' });
        // }
        const response = await submitService.addSubmit(req.body);
        return res.status(200).send({ message: 'Success', response });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error', error: message.error });
    }
};

module.exports = {
    addSubmit
}