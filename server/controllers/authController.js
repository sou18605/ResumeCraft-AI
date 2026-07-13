const User =
require(
"../models/User"
);

const jwt =
require(
"jsonwebtoken"
);

// REGISTER

exports.register =
async(
req,
res
)=>{

try{

const {

name,
mobile,
email,
password,

}=
req.body;

const exists =
await User.findOne({

email,

});

if(
exists
){

return res.status(400).json({

message:
"Email already exists",

});

}

await User.create({

name,

mobile,

email,

password,

});

res.status(201).json({

success:true,

message:
"Registration successful",

});

}

catch(error){

console.log(
error
);

res.status(500).json({

message:
error.message,

});

}

};

// LOGIN

exports.login =
async(
req,
res
)=>{

try{

const {

email,
password

}=
req.body;

const user =
await User.findOne({

email,

});

if(
!user
){

return res.status(400).json({

message:
"Invalid credentials",

});

}

const match =
await user.matchPassword(
password
);

if(
!match
){

return res.status(400).json({

message:
"Invalid credentials",

});

}

const token =
jwt.sign(

{
id:
user._id,
},

process.env.JWT_SECRET,

{

expiresIn:
"30d",

}

);

res.json({

success:true,

token,

});

}

catch(error){

res.status(500).json({

message:
error.message,

});

}

};
