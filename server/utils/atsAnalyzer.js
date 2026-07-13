// atsAnalyzer.js

const atsAnalyzer = (text) => {
  const resume = text.toLowerCase();

  let score = 0;
  const suggestions = [];

  // ==========================
  // Section Check
  // ==========================

  const sections = [
    "summary",
    "skills",
    "education",
    "experience",
    "project",
  ];

  sections.forEach((section) => {
    if (resume.includes(section)) {
      score += 10;
    } else {
      suggestions.push(
        `Add ${section} section`
      );
    }
  });

  // ==========================
  // Technical Keywords
  // ==========================

  const keywords = [
    "javascript",
    "react",
    "node",
    "express",
    "mongodb",
    "html",
    "css",
    "bootstrap",
    "tailwind",
    "api",
    "github",
    "jwt",
    "redux",
    "next",
    "typescript",
    "sql",
  ];

  let keywordCount = 0;

  keywords.forEach((word) => {
    if (resume.includes(word)) {
      keywordCount++;
    }
  });

  score += Math.min(
    keywordCount * 3,
    30
  );

  if (keywordCount < 5) {
    suggestions.push(
      "Add more technical skills"
    );
  }

  // ==========================
  // Resume Length
  // ==========================

  const words =
    text
      .trim()
      .split(/\s+/).length;

  if (
    words >= 300 &&
    words <= 900
  ) {
    score += 15;
  } else {
    suggestions.push(
      "Keep resume between 300–900 words"
    );
  }

  // ==========================
  // Contact Details
  // ==========================

  const email =
    /\S+@\S+\.\S+/;

  const phone =
    /\d{10}/;

  if (email.test(text)) {
    score += 5;
  } else {
    suggestions.push(
      "Add email"
    );
  }

  if (phone.test(text)) {
    score += 5;
  } else {
    suggestions.push(
      "Add phone number"
    );
  }

  // ==========================
  // Social Profiles
  // ==========================

  if (
    resume.includes(
      "github"
    )
  ) {
    score += 5;
  } else {
    suggestions.push(
      "Add GitHub profile"
    );
  }

  if (
    resume.includes(
      "linkedin"
    )
  ) {
    score += 5;
  } else {
    suggestions.push(
      "Add LinkedIn profile"
    );
  }

  // ==========================
  // Experience
  // ==========================

  if (
    resume.includes(
      "intern"
    ) ||
    resume.includes(
      "experience"
    )
  ) {
    score += 10;
  } else {
    suggestions.push(
      "Add internship or experience"
    );
  }

  // ==========================
  // Projects
  // ==========================

  const projectCount =
    (
      resume.match(
        /project/g
      ) || []
    ).length;

  if (
    projectCount >= 2
  ) {
    score += 10;
  } else {
    suggestions.push(
      "Add at least 2 projects"
    );
  }

  // ==========================
  // Final Score
  // ==========================

  score = Math.min(
    score,
    100
  );

  let level =
    "Needs Improvement";

  if (score >= 85) {
    level =
      "Excellent";
  } else if (
    score >= 70
  ) {
    level =
      "Good";
  } else if (
    score >= 50
  ) {
    level =
      "Average";
  }

  return {
    score,
    level,
    suggestions,
  };
};

module.exports =
  atsAnalyzer;