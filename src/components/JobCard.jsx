import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {job.title}
          </h2>

          <p className="text-gray-700 mt-1">
            {job.company}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {job.type}
        </span>

      </div>

      <div className="mt-5 space-y-2">

        <p className="text-gray-700">
          📍 {job.location}
        </p>

        <p className="text-green-600 font-semibold">
          💰 {job.salary}
        </p>

      </div>

      <Link href={`/jobs/${job.id}`}>
        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          View Details
        </button>
      </Link>

    </div>
  );
}