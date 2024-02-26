
const About = () => {
    return (
        <div className="h-screen sm:w-[85%] mx-auto flex justify-center items-center">
            <div className="bg-gray-100 p-8  rounded-lg ">
                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-gray-700 text-lg">
                        We are an enormous community of bloggers connected through this website. We share our knowledge, experiences, and passions with each other. Whether you&apos;re a seasoned professional or just starting out, we&apos;re here to help you succeed. Join us on this journey of self-expression and growth.
                    </p>
                    <button className="btn btn-primary">Let&apos;s get Connected</button>
                </div>
            </div>
        </div>
    )
}
export default About