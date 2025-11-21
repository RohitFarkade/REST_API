export default function notFound(req,res,next){
    res.status(404).json({Error:"Not Found",path: req.originalUrl});
}