// app/api/contact/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// 1. Define your MongoDB schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  preferredTime: String,
  contactMethod: String,
  agree: Boolean,
});

// 2. Avoid model overwrite issues in Next.js dev
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// 3. Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI!); // store your MongoDB URI in .env
};

// 4. Handle the POST request
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const contact = new Contact(body);
    await contact.save();

    return NextResponse.json({ success: true, message: "Contact saved" });
  } catch (err) {
    console.error("Error saving contact:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
