// For app/confirmation/page.tsx or pages/confirmation.tsx
import Link from "next/link";


export default function ConfirmationPage() {
    return (
        <div className="min-h-screen bg-[#f5f2eb] flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full text-center">
                <h1 className="text-3xl font-bold text-green-700 mb-4">Booking Confirmed</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Thank you for scheduling your consultation with Dr. Serena Blake. A confirmation email has been sent to your address.
                </p>
                <div className="text-sm text-gray-600 mb-6">
                    If you have any questions or need to reschedule, please contact us directly.
                </div>
                {/* <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
        >
          Back to Home
        </a> */}
                <Link href="/" className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
