class ApiError extends Error{
    consturctor(
        statusCodes,
        message = "Something went worng",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCodes = statusCodes
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.consturctor)
        }
    }
}

export { ApiError }