import jobs from "../../../data/jobs";
import Link from "next/link";

export default async function JobDetails({ params }) {
  const { id } = await params;

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <h1 className="text-center text-3xl text-gray-900 mt-10">
        Job Not Found
      </h1>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-gray-900">
          {job.title}
        </h1>

        <p className="text-xl mt-2 text-gray-700">
          {job.company}
        </p>

        <div className="mt-6 space-y-3">

          <p className="text-gray-700">
            <strong className="text-gray-900">📍 Location:</strong> {job.location}
          </p>

          <p className="text-gray-700">
            <strong className="text-gray-900">💼 Job Type:</strong> {job.type}
          </p>

          <p className="text-green-600 font-bold">
            <strong>💰 Salary:</strong> {job.salary}
          </p>

        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-10">
          Job Description
        </h2>

        <p className="mt-3 text-gray-700 leading-7">
          {job.description}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">
          Skills Required
        </h2>

        <div className="flex flex-wrap gap-3 mt-4">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex gap-4">

          <Link href={`/apply/${job.id}`}>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </Link>

          <Link href="/">
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700">
              Back
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}