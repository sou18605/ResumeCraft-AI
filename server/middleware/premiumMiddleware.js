const checkPremium = (req, res, next) => {
  // protect middleware runs first, attaching the user data to req.user
  if (req.user && req.user.isPremium) {
    return next();
  }

  return res.status(403).json({
    success: false,
    message: "Access Denied. This is a premium WhatsApp membership feature.",
  });
};

module.exports = { checkPremium };