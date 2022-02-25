const exampleFunction = (req,res)=>{
    res.status(200).send({"msg":"Response from exampleFunction in exampleController"})
}

module.exports = {
    exampleFunction
}