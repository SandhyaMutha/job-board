"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer"; 
import jobs from "../data/jobs";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [jobType, setJobType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "All" || job.location === location;

    const matchesType =
      jobType === "All" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h1 className="text-6xl font-bold">
              Find Your Dream Job
            </h1>

            <p className="mt-6 text-xl">
              Discover thousands of job opportunities from the world's top companies.
            </p>

            <div className="flex justify-center gap-12 mt-10">
              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p>Jobs</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p>Companies</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">20K+</h2>
                <p>Candidates</p>
              </div>
            </div>

            <button className="mt-10 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Explore Jobs
            </button>

          </div>
        </section>

        {/* Search & Filters */}
        <section className="max-w-6xl mx-auto px-6 my-10">
          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg bg-white shadow"
            />

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-3 rounded-lg bg-white shadow"
            >
              <option>All</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Pune</option>
              <option>Mumbai</option>
            </select>

            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="border p-3 rounded-lg bg-white shadow"
            >
              <option>All</option>
              <option>Full Time</option>
              <option>Remote</option>
              <option>Internship</option>
            </select>

          </div>
        </section>

        {/* Featured Jobs */}
        <section className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold mb-6">
            ⭐ Featured Jobs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {jobs.slice(0, 3).map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.id}`}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600 hover:shadow-xl transition block"
              >
                <h3 className="text-xl font-bold">{job.title}</h3>

                <p className="text-gray-600 mt-2">
                  {job.company}
                </p>

                <p className="mt-2">
                  📍 {job.location}
                </p>

                <p className="text-green-600 font-semibold mt-2">
                  💰 {job.salary}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Jobs */}
        <section className="max-w-6xl mx-auto px-6 pb-12">

          <h2 className="text-3xl font-bold mb-8">
            Latest Jobs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <p className="text-center text-red-500 col-span-3">
                No Jobs Found
              </p>
            )}

          </div>

        </section>

      </main>
        <Footer />
    </>
  );
}