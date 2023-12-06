import videoFile from '../models/videoFile.js';
export const uploadVideo = async(req,res,next)=>{
    if(req.file===undefined){
        res.status(404).json({message:"plz Upload a '.mp4' only"})
    }else{
        try {
            const file = new videoFile({
                videoTitle: req.body.title,
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: req.file.size,
                videoChanel: req.body.chanel,
                uploader: req.body.uploader,
            })
            await file.save();
            res.status(201).send("File uploaded successfully")
        } catch (error) {
            res.status(400).send(error.message)
        }}
}