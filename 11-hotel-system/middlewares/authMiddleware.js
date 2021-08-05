
const authMidlleware = (req, res, next) => {
    const token = req.headers.authorization
        // ! klo engk ada token
        if (typeof token === 'undefined') {
          res.send({
              status: 207,
              message: 'You have no authorization.'
          })
        }
      
        // ! klo token nya ada, tapi gagal di decoded
        const decodedToken = jwt.verify(token, 'secret_key');
        if (!decodedToken) {
          res.send({
              status: 208,
              message: 'failed to decode.'
          })
        }
      
        // ! lanjut mang...
        next()
}


exports.module = authMidlleware;