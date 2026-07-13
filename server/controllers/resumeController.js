const fs = require("fs");

// Works with old and new pdf-parse
const pdfModule =
require("pdf-parse");

const pdfParse =
pdfModule.default ||
pdfModule;

const Resume =
require("../models/Resume");

const atsAnalyzer =
require("../utils/atsAnalyzer");



// ===============================
// Upload Resume + ATS Analysis
// ===============================

exports.uploadResume =
async (
req,
res
) => {

try {

if (
!req.file
) {

return res
.status(400)
.json({

success:
false,

message:
"No file uploaded",

});

}


// Read uploaded file

const fileBuffer =
fs.readFileSync(
req.file.path
);


// Extract PDF text

const parsed =
await pdfParse(
fileBuffer
);

const resumeText =
parsed.text ||
"";


// ATS Analysis

const analysis =
atsAnalyzer(
resumeText
);


// Save in DB

const resume =
await Resume.create({

user:
req.user.id,

originalName:
req.file
.originalname,

fileName:
req.file
.filename,

filePath:
req.file
.path,

resumeText,

atsScore:
analysis.score,

suggestions:
analysis.suggestions,

});


// Response

res
.status(201)
.json({

success:
true,

message:
"Resume uploaded successfully",

analysis,

resume,

});

}

catch (
error
) {

console.log(
"UPLOAD ERROR:",
error
);

res
.status(500)
.json({

success:
false,

message:
error.message ||
"Upload Failed",

});

}

};




// ===============================
// Get My Resumes
// ===============================

exports.getMyResumes =
async (
req,
res
) => {

try {

const resumes =
await Resume
.find({

user:
req.user.id,

})
.sort({

createdAt:
-1,

});

res
.status(200)
.json({

success:
true,

resumes,

});

}

catch (
error
) {

res
.status(500)
.json({

success:
false,

message:
error.message,

});

}

};




// ===============================
// Get Resume By ID
// ===============================

exports.getResumeById =
async (
req,
res
) => {

try {

const resume =
await Resume.findById(
req.params.id
);

if (
!resume
) {

return res
.status(404)
.json({

success:
false,

message:
"Resume not found",

});

}

res
.status(200)
.json({

success:
true,

resume,

});

}

catch (
error
) {

res
.status(500)
.json({

success:
false,

message:
error.message,

});

}

};




// ===============================
// Delete Resume
// ===============================

exports.deleteResume =
async (
req,
res
) => {

try {

const resume =
await Resume.findById(
req.params.id
);

if (
!resume
) {

return res
.status(404)
.json({

success:
false,

message:
"Resume not found",

});

}


if (
fs.existsSync(
resume.filePath
)
) {

fs.unlinkSync(
resume.filePath
);

}


await Resume
.findByIdAndDelete(
req.params.id
);

res
.status(200)
.json({

success:
true,

message:
"Resume deleted",

});

}

catch (
error
) {

res
.status(500)
.json({

success:
false,

message:
error.message,

});

}

};