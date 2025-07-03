"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
    answer:
      "CBT-I typically includes 5–8 sessions focusing on sleep education, sleep restriction, stimulus control, and cognitive restructuring. It helps reshape beliefs and behaviors around sleep.",
  },
  {
    question: "Do you treat children or adolescents?",
    answer:
      "No, I work specifically with adults. I’d be happy to refer you to trusted colleagues who specialize in child and adolescent therapy.",
  },
  {
    question: "Which geographic regions do you serve?",
    answer:
      "I provide telehealth services to clients in Michigan and other PSYPACT participating states across the U.S.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer:
      "I currently offer sessions exclusively through secure telehealth platforms to provide accessibility and flexibility.",
  },
  {
    question: "What technology do we use for virtual sessions?",
    answer:
      "Sessions are conducted via a secure, HIPAA-compliant video platform accessible from any modern device.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "I do not accept insurance directly but can provide a superbill that you may submit for out-of-network reimbursement.",
  },
  {
    question: "What are your hours?",
    answer:
      "Appointments are typically available Monday through Thursday from 9 AM to 5 PM, with some flexibility.",
  },
  {
    question: "What is the cost of therapy?",
    answer:
      "Session fees are discussed during the consultation and are based on session length and service type.",
  },
  {
    question: "What are the benefits of private pay therapy?",
    answer:
      "Private pay allows for increased confidentiality, flexibility in treatment length, and avoids diagnostic labeling.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#f5f9fc] to-white py-20 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-[#34526c] mb-10">Frequently Asked Questions</h2>
        <h3 className="text-2xl text-[#34526c] font-semibold mb-6">Therapy</h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-blue-200 bg-white shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-blue-900 hover:text-blue-800 font-medium text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}