import Image from "next/image";
import Link from "next/link";

export default function SpainAcademyCaseStudy() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Spain Academy</h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            Spain Academy approached us to design a modern, vibrant website that
            would help attract students to their Spanish-LCA course. This
            intensive course immerses students in the Spanish language, culture,
            and university experience, ultimately helping them gain access to
            Spanish universities. The website had to reflect the energy and
            excitement of the Spanish culture while providing clear information
            on the course offerings and the admissions process.
          </p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-lg font-semibold mb-3">Client</h2>
            <p className="text-xl font-bold">Spain Academy</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Turnaround</h2>
            <p className="text-xl font-bold">(under development)</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Stack</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Framer Motion
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-lg font-semibold mb-3">Industry</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Education
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Language Learning
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-3">Scope of work</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Web Design
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                UI/UX
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                Development
              </span>
            </div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="mb-20 border border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Spain Academy Logo"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                    <span>Home</span>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                    Book A Consultation
                  </button>
                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-4xl font-bold mb-4">
                    Welcome to Spain Academy.
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We&apos;re not just a school; we&apos;re your bridge to
                    success in Spain. Let&apos;s start building your
                    future—together.
                  </p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md">
                    Book A Consultation
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-pink-100 rounded-lg p-4"></div>
                  <div className="bg-yellow-100 rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-bold">200+</div>
                      <div>Happy</div>
                    </div>
                  </div>
                  <div className="bg-black text-white rounded-lg p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div>students from all</div>
                      <div>over the world</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-10">
              Spain Academy needed a website that would appeal to international
              students looking to study in Spain. The site needed to convey the
              vibrant Spanish culture while providing detailed information about
              their language courses and university pathway programs. The
              challenge was to create a design that balanced cultural
              authenticity with academic credibility.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-10">
              We began with extensive research into Spanish cultural aesthetics
              and educational website best practices. Our design incorporated
              warm colors inspired by the Spanish flag and landscape, with a
              modern, clean layout that emphasized easy navigation and clear
              information hierarchy. We implemented a responsive design that
              works seamlessly across all devices, ensuring that prospective
              students could access information whether they were on desktop
              computers or mobile phones.
            </p>

            <h2 className="text-3xl font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-600 mb-6">
              The new Spain Academy website has significantly improved user
              engagement metrics:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-10">
              <li className="mb-2">42% increase in time spent on site</li>
              <li className="mb-2">
                68% increase in course information page views
              </li>
              <li className="mb-2">53% increase in consultation bookings</li>
              <li>35% decrease in bounce rate</li>
            </ul>
          </div>
        </div>

        {/* Other Case Studies */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Other Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Wassup Media Co. Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wassup Media Co.</h3>
                <p className="text-gray-600 mb-4">
                  Digital media transformation for a growing content agency
                </p>
                <Link
                  href="/case-study/wassup-media"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  View Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="TechFlow Solutions Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TechFlow Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise software platform with intuitive UX design
                </p>
                <Link
                  href="/case-study/techflow-solutions"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  View Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="GreenLeaf Organics Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">GreenLeaf Organics</h3>
                <p className="text-gray-600 mb-4">
                  E-commerce redesign for sustainable product brand
                </p>
                <Link
                  href="/case-study/greenleaf-organics"
                  className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
                >
                  View Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
