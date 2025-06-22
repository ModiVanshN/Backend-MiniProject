const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads'); // Directory to store uploaded files
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, buffer) => {
            if (err) {
                return cb(err); // Handle error
            }
            const filename = buffer.toString('hex') + path.extname(file.originalname);
            cb(null, filename); // Pass the generated filename to multer
        });
    }
});

const upload = multer({ storage: storage });
module.exports = upload;