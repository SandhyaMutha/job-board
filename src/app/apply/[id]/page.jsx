"use client";

import { use } from "react";
import { useState } from "react";
import jobs from "../../../data/jobs";

export default function ApplyPage({ params }) {
  const { id } = use(params);

  const job = jobs.find((j) => j.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
  });

  // If job is not found
  if (!job) {
    return (
      <h1 className="text-center text-3xl mt-10">
        Job Not Found
      </h1>
    );
  }


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const application = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      applicantName: form.name,
      email: form.email,
      phone: form.phone,
      resume: form.resume,
      coverLetter: form.coverLetter,
      appliedDate: new Date().toLocaleDateString(),
    };


    // Get existing applications
    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];


    // Save new application
    localStorage.setItem(
      "applications",
      JSON.stringify([
        ...existingApplications,
        application,
      ])
    );


    alert("Application Submitted Successfully!");


    setForm({
      name: "",
      email: "",
      phone: "",
      resume: "",
      coverLetter: "",
    });
  };


  return (
    <main className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Apply for {job.title}
        </h1>

        <p className="text-gray-600 mb-8">
          {job.company}
        </p>


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />


          <input
            type="url"
            name="resume"
            placeholder="Resume Link"
            value={form.resume}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />


          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            rows="5"
            value={form.coverLetter}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>


        </form>

      </div>

    </main>
  );
}