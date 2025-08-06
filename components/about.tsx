import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

export default function About() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description: "Built responsive user interfaces and improved user experience across web applications.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors, specialized in software engineering and web development.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I am a passionate and goal-oriented student pursuing a B.Tech degree in Artificial Intelligence and Data
                Science at RMK Engineering College. I have hands-on experience in Java, Python, HTML, CSS, and SQL, and
                I'm continuously working on strengthening my problem-solving and development skills.
              </p>
              <p className="text-gray-600 mb-6">
                I have a strong interest in participating in hackathons and tech challenges, as they allow me to explore
                innovative solutions and collaborate with like-minded peers. I'm particularly enthusiastic about
                emerging technologies, AI-driven applications, and real-world data-driven solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Pondicherry, India
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Available for internships
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Machine Learning and AI model development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Data analysis and visualization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Web development with Python and Java
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Database design and SQL optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hackathon participation and problem-solving
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">B.Tech in Artificial Intelligence and Data Science</h4>
                    <p className="text-blue-600 font-medium">R.M.K. Engineering College</p>
                    <p className="text-sm text-gray-500 mb-2">2023 - 2027 (Expected)</p>
                    <p className="text-gray-600">Current CGPA: 8.23/10.0</p>
                    <p className="text-gray-600 text-sm mt-2">Kavaraipettai, Tiruvallur District</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">Higher Secondary Education</h4>
                    <p className="text-blue-600 font-medium">Aditya Vidyashram Residential School</p>
                    <p className="text-sm text-gray-500 mb-2">2013 - 2023</p>
                    <p className="text-gray-600">Grade 10: 435/500 (87%)</p>
                    <p className="text-gray-600">Grade 12: 435/500 (87%)</p>
                    <p className="text-gray-600 text-sm mt-2">Pondicherry</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Certifications
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">Oracle AI Vector Search Certified Professional</h4>
                    <p className="text-blue-600 font-medium">Oracle</p>
                    <p className="text-gray-600 text-sm">Professional certification in AI vector search technologies</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">The Joy of Computing using Python</h4>
                    <p className="text-blue-600 font-medium">NPTEL</p>
                    <p className="text-gray-600 text-sm">Comprehensive Python programming certification</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">Artificial Intelligence Foundation</h4>
                    <p className="text-blue-600 font-medium">Infosys Springboard</p>
                    <p className="text-gray-600 text-sm">Foundation course in AI concepts and applications</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">Soft Skill Development</h4>
                    <p className="text-blue-600 font-medium">NPTEL</p>
                    <p className="text-gray-600 text-sm">Professional communication and collaboration skills</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
