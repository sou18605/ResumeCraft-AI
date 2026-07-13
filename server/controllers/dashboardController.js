const Resume = require("../models/Resume");

exports.getDashboard = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    const latest = resumes[0];

    // Check if the authenticated user has a premium membership
    const isPremiumUser = req.user && req.user.isPremium === true;

    res.json({
      ats: latest?.atsScore || 0,
      resumes: resumes.length,
      applications: 18,
      interviews: 3,
      activities: resumes.slice(0, 5).map((item) => ({
        text: `${item.originalName} uploaded`,
        date: item.createdAt,
      })),
      
      // --- PREMIUM MEMBERSHIP FEATURES ---
      // Free users get an empty array for suggestions, Premium users get full data
      suggestions: isPremiumUser ? (latest?.suggestions || []) : [],
      
      // WhatsApp metadata payload to help the frontend render locked states/banners
      whatsappFeatures: {
        isLocked: !isPremiumUser,
        status: isPremiumUser ? "Active" : "Locked",
        message: isPremiumUser 
          ? "Premium features & WhatsApp alerts are active." 
          : "Upgrade to Premium to unlock automated WhatsApp alerts and real-time AI suggestions!"
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};