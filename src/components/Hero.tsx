// export default function Hero() {
//   return (
//     <section className="relative w-full h-[90vh] overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/ocean.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay Text */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h1 className="text-white text-5xl sm:text-2xl md:text-7xl lg:text-7xl font-bold leading-tight">
//           Psychological Care for
//         </h1>
//         <h2 className="text-white text-4xl sm:text-2xl md:text-6xl lg:text-7xl font-semibold mt-4 leading-tight">
//           Change, Insight, and Well-Being
//         </h2>

//         <p className="mt-4  text-white text-sm md:text-base lg:text-sm p-1 rounded-2xl">
//           Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
//         </p>
//         <button className="mt-8 bg-[#aac6c3] text-black font-bold text-sm tracking-wide px-6 py-4 rounded-full shadow-lg hover:bg-[#a0cfca] transition-all duration-300">
//           SCHEDULE A CONSULTATION
//         </button>
//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        src="/ocean.mp4"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-4">Psychological Care for</h1>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Change, Insight, and Well-Being</h2>
        <p className="text-lg mb-6 max-w-2xl">
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
        </p>
        <button
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          SCHEDULE A CONSULTATION
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4">Book a Consultation</h3>
            <form method="POST" action="/api/consultation">
              <input type="text" name="name" required placeholder="Name" className="border p-2 mb-3 w-full rounded" />
              <input type="email" name="email" required placeholder="Email" className="border p-2 mb-3 w-full rounded" />
              <input type="tel" name="phone" required placeholder="Phone" className="border p-2 mb-3 w-full rounded" />
              <textarea name="message" required placeholder="What brings you here?" className="border p-2 mb-3 w-full rounded"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
