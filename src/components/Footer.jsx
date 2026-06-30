
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">JobBoard</h2>
            <p className="mt-3 text-gray-400">
              Find your dream job with thousands of opportunities from top companies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>Home</li>
              <li>Jobs</li>
              <li>Companies</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-3">📧 support@jobboard.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Hyderabad, India</p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 JobBoard. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}