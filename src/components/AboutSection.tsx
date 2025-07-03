import Image from "next/image";




export default function AboutSection() {

  return (
    <section className="bg-[#F7F5EF] py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="lg:w-2/3 text-[#484534]">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            About Dr. Serena Blake
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600">
            <ul className="space-y-2">
              <li><strong>Name & Title:</strong> Dr. Serena Blake, PsyD (Clinical Psychologist)</li>
              <li><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</li>
              <li><strong>Contact:</strong>
                <ul className="ml-4 list-disc">
                  <li>Phone: (323) 555-0192</li>
                  <li>Email: <a href="mailto:serena@blakepsychology.com" className="text-blue-600 underline">serena@blakepsychology.com</a></li>
                </ul>
              </li>
              <li><strong>Office Hours:</strong>
                <ul className="ml-4 list-disc">
                  <li>In-person: Tue & Thu, 10 AM–6 PM</li>
                  <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
                </ul>
              </li>
              <li><strong>Experience:</strong> 8 years of practice, 500+ sessions</li>
            </ul>
            <p>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/3">
          <Image
            src="/dr-serenablake.webp"
            alt="Dr. Serena Blake"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
