// import { NextRequest, NextResponse } from 'next/server';
// import mongoose from 'mongoose';
// import { Consultation } from '@/models/Consultation';
// import connectDB from "@/lib/db";
// await connectDB();


// // Connect to MongoDB
// const uri = process.env.MONGODB_URI || '';
// if (!mongoose.connection.readyState) {
//   mongoose.connect(uri);
// } console.log("mongodb connected succesfully");


// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.formData();
//     const name = data.get('name') as string;
//     const email = data.get('email') as string;
//     const phone = data.get('phone') as string;
//     const message = data.get('message') as string;

//     const newConsultation = new Consultation({ name, email, phone, message });
//     await newConsultation.save();

//     return NextResponse.redirect('/confirmation/page.tsx');
//   } catch (error) {
//     return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Consultation } from '@/models/Consultation';
import connectDB from "@/lib/db";

await connectDB();

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;
    const message = data.get('message') as string;

    const newConsultation = new Consultation({ name, email, phone, message });
    await newConsultation.save();

    // ✅ Correct way to redirect after POST
    return NextResponse.redirect(new URL('/confirmation', req.url));
  } catch (error) {
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
