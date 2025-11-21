export default function errorHandler(err,req,res,next){
    const status = err?.status||500;
    const isDev = process.env.NODE_ENV !="production";

    const body = {
        error:{
            message:err?.message||(status === 500?"Internal Server Error":"Unknown Error"),
            status,
        }
    };
    if (isDev && err?.stack) {
    body.error.stack = err.stack;
  }

  // Simple console logging — replace with a logger in production
  console.error(`[${new Date().toISOString()}] Error:`, {
    message: err?.message,
    status,
    path: req.originalUrl,
    stack: isDev ? err?.stack : undefined,
  });

  res.status(status).json(body);
}