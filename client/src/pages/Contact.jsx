const Contact = () => {
    return (
        <div className="h-screen sm:w-[85%] mx-auto flex justify-center items-center">
            <div className="bg-gray-100 p-8 rounded-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-700">
                        If you have any questions or inquiries, please feel free to reach out to us using the
                        form below . We will get back to you as soon as possible.
                    </p>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full py-3 px-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full py-3 px-2  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full px-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact