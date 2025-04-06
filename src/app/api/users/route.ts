import { connectDB } from "../../lib/mongodb"
import User from "../../lib/mongodb/models/User"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const { email, password, role } = await req.json()

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10)

  try {
    await connectDB()

    // Create a new user
    const user = await User.create({ email, password: hashedPassword, role })

    return new Response(JSON.stringify({ message: "User created!" }), { status: 201 })
  } catch (error) {
    return new Response("Error creating user", { status: 400 })
  }
}
