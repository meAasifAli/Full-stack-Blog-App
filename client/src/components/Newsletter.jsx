import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your newsletter signup logic here
        console.log('Subscribing with email:', email);
        setEmail('');
    };
    return (
        <div className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-right animate-infinite animate-duration-[6000ms] animate-ease-in-out">Subscribe to our Newsletter</h2>
                <p className="text-gray-600 mb-6">Stay updated with our latest articles and news.</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-2/3 bg-gray-200 px-4 py-2 rounded mb-4 sm:mb-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-1/3 bg-blue-700 text-white font-bold px-4 py-2 rounded sm:ml-2 hover:bg-blue-600"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Newsletter