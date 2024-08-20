//function for connection handler

const asyncHanlder = (requestHandler) => {
 return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).
    catch((err) => next(err));
  };
};
/*const asyncHanlder = (fn) => async (req, res, next) =>{
    try {
        await fn(req, res, next) //function execute
    } catch (error) {
        res.status(err.code || 500).json({   //function excuter error
            success: false,
            message: err.message
        })
    }
} */
