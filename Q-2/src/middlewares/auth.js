const isAuthenticated = (req,res,next) => {
  if(req.session.loggedin){
    return next();
  }
  else{
    res.redirect("/user/login")
  }
}

module.exports = isAuthenticated