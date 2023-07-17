const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const uploadController = (req, res) => {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, './upload');
    form.keepExtensions = false;
    form.maxFieldsSize = 10 * 1024 * 1024;
    form.multiples = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: 'Cannot upload images', error: err });
        }
        let arrOfFiles = files[''];
        if (arrOfFiles.length > 0) {
            let fileNames = [];
            arrOfFiles.forEach((eachFile) => {
                const extension = path.extname(eachFile.originalFilename);
                if (extension === '.jpg' || extension === '.docx' || extension === '.pdf' ||
                    extension === '.png' || extension === '.JPG' || extension === '.PNG' || 
                    extension === '.jpeg') {
                    const newFilePath = `${eachFile.filepath}.${extension}`;
                    fs.renameSync(eachFile.filepath, newFilePath);
                    eachFile.filepath = newFilePath;
                    fileNames.push(eachFile.filepath);
                }
            });
            return res.status(200).send({
                message: 'Uploaded files successfully',
                data: fileNames,
                numberOfFiles: fileNames.length
            });
        } else {
            return res.status(400).send({ message: 'No images to upload' });
        }
    })
}

const getFiles = (req, res) => {
    let fileNames = 'APIs/upload/' + req.query.file_names;
    fs.readFile(fileNames, (err, fileData) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ message: 'Error getting files' });
        };
        res.setHeader('Content-Type', 'image/jpeg');
        return res.status(200).send({ message: 'Getting files successfully', fileData });
    })
}

module.exports = {
    uploadController,
    getFiles
}
