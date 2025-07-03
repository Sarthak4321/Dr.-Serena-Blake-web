// const services = [
//   {
//     title: "Individual Counseling",
//     description:
//       "Work one-on-one to explore emotional challenges, build resilience, and develop personalized strategies for growth. Ideal for stress, anxiety, grief, and life transitions.",
//     image: "/services/individual.jpg",
//   },
//   {
//     title: "Couples Counseling",
//     description:
//       "Improve communication, rebuild trust, and foster emotional connection in your relationship. Designed to help couples navigate challenges together.",
//     image: "/services/couples.jpg",
//   },
//   {
//     title: "Anxiety & Stress Therapy",
//     description:
//       "Gain tools to manage anxiety, reduce daily stress, and improve overall mental well-being. Evidence-based approaches tailored to your unique experiences.",
//     image: "/services/anxiety.jpg",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="bg-[#F4F7F8] py-20 px-6 lg:px-24">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-12">How I Help</h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#C6E3E2] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-[100%] h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-700 text-sm mb-4">{service.description}</p>
//                 <button className="w-full border border-gray-700 text-sm py-2 rounded hover:bg-gray-100">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

const services = [
  {
    title: "Individual Counseling",
    description:
      "Work one-on-one to explore emotional challenges, build resilience, and develop personalized strategies for growth. Ideal for stress, anxiety, grief, and life transitions.",
    image: "/services/individual.jpg",
  },
  {
    title: "Couples Counseling",
    description:
      "Improve communication, rebuild trust, and foster emotional connection in your relationship. Designed to help couples navigate challenges together.",
    image: "/services/couples.jpg",
  },
  {
    title: "Anxiety & Stress Therapy",
    description:
      "Gain tools to manage anxiety, reduce daily stress, and improve overall mental well-being. Evidence-based approaches tailored to your unique experiences.",
    image: "/services/anxiety.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F4F7F8] py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">How I Help</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#C6E3E2] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                <button className="w-full border border-gray-700 text-sm py-2 rounded hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
