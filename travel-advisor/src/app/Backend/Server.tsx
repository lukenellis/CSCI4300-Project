import express, { Request, Response } from "express"; // Correctly import express and its types
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";

// Initialize the Express app
const app = express();
const JWT_SECRET = "your-secret-key"; // Use a more secure key in production

// Dummy in-memory "database"
const users: { email: string; password: string; fullName: string }[] = [];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sign-up route
app.post("/api/signup", async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({
      errors: { general: "Email already registered" },
    });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the "database"
  const newUser = { fullName, email, password: hashedPassword };
  users.push(newUser);

  // Generate a JWT token
  const token = jwt.sign({ userId: newUser.email }, JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  // Send the token back to the client
  res.json({ token });
});

// Login route (for reference)
app.post("/api/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({
      errors: { general: "User not found" },
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      errors: { general: "Invalid password" },
    });
  }

  // Generate a new JWT token
  const token = jwt.sign({ userId: user.email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
});

// Start the Express app
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
