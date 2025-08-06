import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette, Smartphone, GraduationCap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Java", "SQL", "HTML", "CSS"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "AI & Machine Learning",
      icon: <Database className="h-6 w-6" />,
      skills: ["Machine Learning", "Data Analysis", "AI Applications", "Vector Search", "Data Science"],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Oracle AI", "NPTEL Platform", "Infosys Springboard", "Git", "Database Management"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Design & Communication",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Canva Design", "Technical Communication", "Problem Solving", "Presentation"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Soft Skills",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Communication", "Collaboration", "Problem Solving", "Team Work", "Leadership"],
      color: "bg-pink-50 border-pink-200",
    },
    {
      title: "Academic Focus",
      icon: <GraduationCap className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "Statistics", "Research", "Academic Writing"],
      color: "bg-indigo-50 border-indigo-200",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I work with a diverse set of technologies to build robust, scalable, and user-friendly applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`${category.color} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-white rounded-lg mr-3">{category.icon}</div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { skill: "Python", level: 85 },
                { skill: "Java", level: 80 },
                { skill: "Machine Learning", level: 75 },
                { skill: "SQL", level: 78 },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-3">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-blue-600"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${item.level}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold">{item.level}%</span>
                    </div>
                  </div>
                  <p className="font-medium">{item.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
