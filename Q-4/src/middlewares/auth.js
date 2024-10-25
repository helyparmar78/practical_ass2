const jwt = require("jsonwebtoken")

const isAuthenticated = (req,res,next) => {
  const token = req.cookies.jwt
  if(!token){
    return res.redirect("/user/login")
  }

  try{
    const verifiedToken = jwt.verify(token,process.env.JWT_SECRET)
    req.user = verifiedToken
    next()
  }
  catch(error){
    console.log(error)
    res.redirect("/user/login")
  }
}

module.exports = isAuthenticated