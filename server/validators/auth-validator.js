const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email Must be at least of 3 characters." })
    .max(255, { message: "Email Must not be at more than 255 characters." }),

  password: z
    .string({ required_error: "Password is Required" })
    .min(7, { message: "Password Must be at least of 6 characters." })
    .max(1024, {
      message: "Password Must not be at more than 1024 characters.",
    }),
});

//creating an object schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name Must be at least of 3 characters." })
    .max(255, { message: "Name Must not be at more than 255 characters." }),

  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: "Phone Must be at least of 10 numbers." })
    .max(20, { message: "Phone Must not be at more than 20 numbers." }),
});

module.exports = {signupSchema, loginSchema};
