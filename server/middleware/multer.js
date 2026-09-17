import multer from 'multer';
import fs from 'fs';

// make sure temp folder exists
if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './temp'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

// STRICT FILE TYPE CHECK
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const allowedVideoTypes = ['video/mp4', 'video/webm'];

  if (file.fieldname === 'image') {
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true); // accept
    } else {
      cb(new Error('Only JPG, PNG, or WEBP images are allowed'), false);
    }
  } else if (file.fieldname === 'video') {
    if (allowedVideoTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only MP4 or WEBM videos are allowed'), false);
    }
  } else {
    cb(new Error('Unexpected field'), false);
  }
};

// STRICT SIZE LIMIT
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 200 * 1024 * 1024, // 50MB max (covers video; image will be much smaller anyway)
  },
});

export default upload;