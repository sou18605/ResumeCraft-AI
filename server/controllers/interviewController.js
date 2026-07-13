const Interview =
require(
"../models/Interview"
);



// ===================
// Create Interview
// ===================

exports.createInterview =
async (
req,
res
)=>{

try{

const interview =
await Interview.create({

user:
req.user._id,

title:
req.body.title,

company:
req.body.company,

date:
req.body.date,

time:
req.body.time,

description:
req.body.description,

});

res.status(201).json({

success:true,

message:
"Interview scheduled",

interview,

});

}

catch(error){

console.log(
error
);

res.status(500).json({

success:false,

message:
error.message,

});

}

};




// ===================
// Get Interviews
// ===================

exports.getInterviews =
async (
req,
res
)=>{

try{

const interviews =
await Interview.find({

user:
req.user._id,

})

.sort({

createdAt:
-1,

});

res.status(200).json({

success:true,

count:
interviews.length,

interviews,

});

}

catch(error){

console.log(
error
);

res.status(500).json({

success:false,

message:
error.message,

});

}

};




// ===================
// Delete Interview
// ===================

exports.deleteInterview =
async (
req,
res
)=>{

try{

const interview =
await Interview.findById(
req.params.id
);

if(
!interview
){

return res.status(404).json({

success:false,

message:
"Interview not found",

});

}

await Interview.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:
"Interview deleted",

});

}

catch(error){

res.status(500).json({

success:false,

message:
error.message,

});

}

};