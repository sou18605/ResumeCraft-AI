const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");

const path =
require("path");

require("dotenv").config();


// Routes

const authRoutes =
require("./routes/authRoutes");

const userRoutes =
require("./routes/userRoutes");

const resumeRoutes =
require("./routes/resumeRoutes");

const jobRoutes =
require("./routes/jobRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const interviewRoutes =
require("./routes/interviewRoutes");



const app =
express();



// ======================
// Middleware
// ======================

app.use(

cors({

origin:
"http://localhost:3000",

credentials:
true,

})

);

app.use(
express.json()
);

app.use(

express.urlencoded({

extended:
true,

})

);



// ======================
// Upload Folder
// ======================

app.use(

"/uploads",

express.static(

path.join(

__dirname,

"uploads"

)

)

);



// ======================
// API Routes
// ======================

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/users",
userRoutes
);

app.use(
"/api/resumes",
resumeRoutes
);

app.use(
"/api/jobs",
jobRoutes
);

app.use(
"/api/dashboard",
dashboardRoutes
);


// FIXED

app.use(
"/api/interview",
interviewRoutes
);




// ======================
// Health Check
// ======================

app.get(
"/",
(
req,
res
)=>{

res.status(200).json({

success:
true,

message:
"ResumeCraft AI Backend Running",

});

}
);




// ======================
// Route Not Found
// ======================

app.use(
(
req,
res
)=>{

res.status(404).json({

success:
false,

message:
"Route not found",

});

}
);




// ======================
// Error Handler
// ======================

app.use(

(
err,
req,
res,
next
)=>{

console.log(
err.stack
);

res.status(

err.status||
500

).json({

success:
false,

message:
err.message||
"Server Error",

});

}

);




// ======================
// MongoDB
// ======================

mongoose

.connect(

process.env.MONGO_URI

)

.then(()=>{

console.log(
"✅ MongoDB Connected"
);

const PORT=
process.env.PORT||
5000;

app.listen(
PORT,
()=>{

console.log(
`🚀 Server running on port ${PORT}`
);

}
);

})

.catch(
(err)=>{

console.log(
"❌ MongoDB Connection Error"
);

console.log(
err.message
);

process.exit(
1
);

}
);