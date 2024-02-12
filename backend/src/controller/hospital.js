
const HospitalModel = require('../model/hospital')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.login = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {
        if (!email || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const hospital = await HospitalModel.findOne({ email: email }).exec();

        if (!hospital) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, hospital.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await HospitalModel.findOne({ email: email }).exec();

        const token = jwt.sign(
            {
                user_id: user._id,
                email: user.email,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "4h",
            }
        )

        user.token = token;

        const result = await user.save();

const response = {

id:result._id,
name:result.name,
email:result.email,
phone:result.phone,
token:result.token,
userType:"hospital"
}

console.log(response);

res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}







































exports.register = async (req,res,next) =>{
    
    
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phone = req.body.phone
   
    
    try {
    
        if(!email || !password|| !name ||!phone){
            throw createHttpError(400,'Missing required parameters')
    
        }
        const isHospitalAvailable = await HospitalModel.findOne({email:email}).exec();
        if(isHospitalAvailable){
            throw createHttpError(400,'User already exists')
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
    
        const hospital = new HospitalModel({
    
            name:name,
            email:email,
            password:hashedPassword,
            phone :phone,
        
    
        })
    
        const result = await hospital.save();
    
        res.status(201).send(result);
    
    
    
        
    } catch (error) {
        next(error);
    }
    
}
    
