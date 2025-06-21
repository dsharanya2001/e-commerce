import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-blue-50 to-blue-100"
        >
            <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">QuickShop Support</h1>
                <p className="text-gray-700 text-center mb-8">
                    We'd love to hear from you! Fill out the form below or reach us directly.
                </p>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
                    <div className="flex flex-col items-center space-y-3 mt-4">
                        <div className="flex items-center">
                            <FaPhone className="text-blue-600 mr-2" />
                            <span className="text-gray-700">+4 8961 944 149</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-blue-600 mr-2" />
                            <span className="text-gray-700">quickshop.support@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkedAlt className="text-blue-600 mr-2" />
                            <span className="text-gray-700">123 QuickShop Blvd, Shopville, USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
