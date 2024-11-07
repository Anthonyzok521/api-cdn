import multer from 'multer';
import { Request, Response } from 'express';

const storage = multer.diskStorage({
    destination: function (req: Request, file, cb) {
      cb(null, 'uploads/images')
    },
    filename: function (req: Request, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  export default upload;