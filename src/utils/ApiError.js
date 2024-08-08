//class for Api Errors Handling

class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went Wrong",
        errors = [],
        stack = ""

    ){       //constructor Overriding   
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }                   
}



export {ApiError}