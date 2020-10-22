const { check, validationResult } = require("express-validator");

exports.userSignupValidator = [
    check("name", "Name is required").notEmpty(),
    check("email", "Email must between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4,
            max: 32,
        }),
    check("password", "Password is required").notEmpty(),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number"),
];

exports.userSignupValidationResult = (req, res, next) => {
    const result = validationResult(req);
    if (result.errors.length !== 0) {
        // console.log(result);
        // console.log(result.errors);
        const firstError = result.errors[0].msg;
        return res.status(400).json({ error: firstError });
    }
    next();
};
