
import createModel from "../model/schema.js"


const RegisterUser = async (req, res) => {
  try {
    const data = req.body
    createModel.insertMany(data)
    res.json({ status: true, message: "User Registeration Successfully" })
  }
  catch (err) {
    res.json({ status: false, error: err, message: " User Registration  Failed==========>" })
  }
}

// GetUser Data 
const GetUserData = async (req, res) => {
  try {
    const UserData = await createModel.find();
    res.json({ status: true, message: "data get Successfully" })
    console.log(UserData);
  }
  catch (err) {
    res.json({ status: false, error: err, message: "data get Failed==========>" })
  }
}

// Delete User Data 
const deleteUserData = async (req, res) => {
  try {
    await createModel.deleteMany({ age: 23 })
    res.json({ status: true, message: "data delete Successfully" })
  }
  catch (err) {
    res.json({ status: false, error: err, message: "data delete Failed==========>" })
  }
}

//  Update User Data
const UpdateUserData = async (req, res) => {
  try {
    await createModel.updateMany({ age: 25 }, { $set: { "vilage": "bhartua" } })
    res.json({ status: true, message: " Update data  Successfully" })
  }
  catch (err) {
    res.json({ status: false, error: err, message: " Update data Failed==========>" })
  }
}





export { GetUserData, deleteUserData, UpdateUserData ,RegisterUser }







