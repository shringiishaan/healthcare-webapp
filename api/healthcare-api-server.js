const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser({
     extended: true
}))
app.use(cors())

const port = 5011

app.post('/login', (req, res) => {
     let email = req.body.email
     let password = req.body.password
     validateLogin(email, password).then((success) => {
          res.json({success: success})
     }, (error) => {
          res.status(401)
          res.json({
               success: false,
               error: error
          })
     })
})

app.post('/getPatientHealthInfo', (req, res) => {
     let email = req.body.email
     //TODO : create state object using email
     let state = {
          "timestamp":"YYYY-MM-DD hh:mm:ss",
          "patient": {
              "name": "John Doe",
              "email": email,
              "phone": "9876543210",
              "age": 25
          },
          "medical_condition": {
              "heart_disease": false,
              "diabetics": true,
              "blood_pressure": {
                  "high_bp": true,
                  "low_bp": false
              }
          },
          "health_status": {
              "height": "175 cms",
              "weight": "65 kg",
              "pulse_rate": "88 bpm",
              "bp": "120/160",
              "bmi": 25    
          }
     }
     res.json({
          success: true,
          data: state
     })
})

validateLogin = (email, password) => {
     return new Promise((resolve, reject) => {
          if(password==="123456A")
               resolve(true)
          else reject(new Error("Invalid Password"))
     })
}

app.listen(port, "0.0.0.0", () => console.log(`API Server listening on port ${port}!`))