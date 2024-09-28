'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type JobListing = {
  id: string
  title: string
  description: string
  hours: string
  pay: string
}

const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Help deliver orders to students around campus',
    description: 'Have a fixed pay',
    hours: '5 hours/week',
    pay: '₹500/hour',
  },
  {
    id: '2',
    title: 'On/Off duty Delivery Associate',
    description: 'Help deliver orders to students around campus.',
    hours: 'Flexible, 1-2 hours/week',
    pay: '₹200/hour + bonuses',
  },
  {
    id: '3',
    title: 'Customer Support Representative',
    description: 'Assist customers with their queries and resolve issues.',
    hours: 'per ticket resolved basis',
    pay: '₹100/per ticket',
  },
]

export default function StudentJobs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState<File | null>(null)
  const [selectedJob, setSelectedJob] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log({ name, email, phone, selectedJob, resume })
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    // Reset form after submission
    setName('')
    setEmail('')
    setPhone('')
    setResume(null)
    setSelectedJob('')
    
    // Redirect to thank you page after 2 seconds
    setTimeout(() => {
      router.push('/thank-you')
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Job Opportunities</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Positions</h2>
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.description}</p>
              <p className="text-sm text-gray-500">Hours: {job.hours}</p>
              <p className="text-sm text-gray-500">Pay: {job.pay}</p>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Application submitted!</strong>
              <span className="block sm:inline"> We'll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="job" className="block mb-1 font-medium">Position</label>
                <select
                  id="job"
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="">Select a position</option>
                  {jobListings.map((job) => (
                    <option key={job.id} value={job.id}>{job.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="resume" className="block mb-1 font-medium">Resume</label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}