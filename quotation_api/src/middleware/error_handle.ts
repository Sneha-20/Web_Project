class AppError extends Error {
    statusCode: any;
    isCustomError: boolean;
    constructor(message : any,statusCode : any){
        super(message);
        this.statusCode = statusCode;
        this.isCustomError = true;
        Error.captureStackTrace(this,this.constructor);
    }
}

let erroHandle = (err : any,req: any, res: any, next : any) => {
        const e = err.statusCode || 500;
        console.log(e)
        console.log(err.message)
        res.status(e).json({
            message : err.message
        });
}

module.exports = erroHandle;