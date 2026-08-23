
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      id: 1,
      title: "PathX Series: Introduction to Quantum Computing",
      date: "22 August, 2026",
      time: "06:00 PM - 07:00 PM",
      location: "Google Meet",
      type: "Seminar",
      attendees: null,
      maxAttendees: null,
      description: "An Expert Session on “Introduction to Quantum Computing,” providing participants with insights into quantum technologies, emerging applications, and the future of computing through expert interaction.",
      status: "Registration closed"
    },
    {
      id: 2,
      title: "IEEE Day Celebration 2024",
      date: "Coming Soon...",
      time: "9:00 AM - 6:00 PM",
      location: "Online",
      type: "Celebration",
      attendees: null,
      maxAttendees: null,
      description: "Annual IEEE Day celebration featuring technical presentations, poster sessions, and networking opportunities.",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Tvishi 2.0",
      date: "Coming Soon...",
      time: "9:00 AM - 6:00 PM",
      location: "Sage University Indore",
      type: "hackthon",
      attendees: null,
      maxAttendees: null,
      description: "24-hour hackathon focused on developing IoT solutions for smart cities and sustainable development.",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "WCCEST-26 International Conference",
      date: "comming soon...",
      time: "9:00 AM - 5:00 PM",
      location: "declare soon",
      type: "International Conference",
      attendees: null,
      maxAttendees: null,
      description: "bringing together global experts, academics, and professionals to exchange knowledge, research, and innovative ideas.",
      status: "Coming Soon"
    }
  ];

  const pastEvents = [

    {
      id: 101,
      title: "Web Development Bootcamp",
      date: "November 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Computer Lab 2, Block A",
      type: "Bootcamp",
      attendees: 60,
      maxAttendees: 60,
      description: "Comprehensive bootcamp covering HTML, CSS, JavaScript, and React.js for modern web development.",
      status: "Completed",
      outcomes: "40 students completed final projects"
    },
    {
      title: "Tvishi 1.0",
      date: "March 29, 2025",
      time: "9:00 AM - 8:00 PM",
      location: "Innovation Lab",
      type: "Hackathon",
      attendees: 80,
      maxAttendees: 80,
      description: "24-hour hackathon focused on developing IoT solutions for smart cities and sustainable development.",
      status: "Completed",
      outcomes: "15 innovative projects developed, 3 winners selected"
    },
    {
      id: 103,
      title: "Ekatra",
      date: "April 4 & 5, 2025",
      time: "9:00 AM - 8:00 PM",
      location: "Seminar hall",
      type: "Meetup Event",
      attendees: 80,
      maxAttendees: 120,
      description: "Organized a 48-hour IEEE event featuring industry interactions, student and team engagement, and a memorable batch ceremony.",
      status: "Completed",
      outcomes: "Enhanced industry–student interaction, strengthened networking and teamwork, and provided participants with valuable exposure to professionals from diverse companies."
    },
    {
      id: 104,
      title: "IEEE PathX: Automated Analysis of Glucose",
      date: "May 23, 2025",
      time: "08:30 AM - 11:00 AM",
      location: "Online",
      type: "IEEE PathX",
      attendees: 60,
      maxAttendees: 60,
      description: "Conducted an online session on using Machine Learning and Computer Vision to analyze glucose response patterns in Type I Diabetes.",
      status: "Completed",
      outcomes: "Participants gained insights into healthcare applications of AI and learned how ML and computer vision can support diabetes monitoring and analysis."
    },
    {
      id: 107,
      title: "Outreach Visit to ISRO Exhibition at Symbiosis College",
      date: "August 23, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Symbiosis College Indore",
      type: "Educational Visit",
      attendees: 22,
      maxAttendees: 22,
      description: "Participated in an ISRO Exhibition at Symbiosis University, Indore, on National Space Day, exploring India’s space technology, satellite applications, missions, and engaging with experts.",
      status: "Completed",
      outcomes: "Students gained practical exposure to space science and technology, enhanced their understanding of ISRO’s achievements, and were inspired to explore careers in space research and innovation."
    },
    {
      id: 108,
      title: "WCCEST-25 International Conference",
      date: "September 24-25, 2026",
      time: "09:00 AM - 5:00 PM",
      location: "Sage University Indore",
      type: "International Conference ",
      attendees: 189,
      maxAttendees: 200,
      description: "bringing together global experts, academics, and professionals to exchange knowledge, research, and innovative ideas.",
      status: "Completed",
      outcomes: "Participants gained valuable insights from international experts, expanded their professional networks, and enhanced their understanding of emerging research and technological developments."
    },
    {
      id: 109,
      title: "BlockChain Workshop",
      date: "February 7, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "S-10 B Block",
      type: "Bootcamp",
      attendees: 60,
      maxAttendees: 100,
      description: "Comprehensive bootcamp covering Block Chain, MetaMask and Soledity for Cyber Security.",
      status: "Completed",
      outcomes: "60 students completed final projects"
    },
    {
      id: 110,
      title: "RRCAT Visit",
      date: "March 01, 2026",
      time: "09:00 AM - 4:00 PM",
      location: "RRCAT Indore",
      type: "Educational Visit",
      attendees: 22,
      maxAttendees: 22,
      description: "providing students with exposure to advanced scientific research, technologies, and real-world applications through interactions and facility visits.",
      status: "Completed",
      outcomes: "Students gained practical exposure to advanced research and technology, enhanced their scientific awareness, and developed a better understanding of career opportunities in science, research, and technology."
    },
    {
      id: 111,
      title: "Empowerment of Women through Artificial Intelligence and Smart Technologies for Next Gen",
      date: "March 12, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Seminar Hall Block D, Institue of Sciences , Sage University Indore",
      type: "Expert Session",
      attendees: 40,
      maxAttendees: 50,
      description: "Organized EWAISTNG-2026, a workshop focused on women’s empowerment through AI and smart technologies, featuring expert sessions, competitions, project presentations, and creative activities.",
      status: "Completed",
      outcomes: "Participants gained awareness of AI-driven opportunities, leadership, innovation, and gender inclusion while developing their creativity, confidence, and interest in technology-driven careers."
    },
    {
      id: 112,
      title: "Towards 2050: Reimagining Crime and Criminal Justice System in the era of AI & ML",
      date: "April 3 & 4, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Seminar Hall Block B, Institue of Law , Sage University Indore",
      type: "National Conference",
      attendees: 100,
      maxAttendees: 100,
      description: "Organized a two-day National Conference on “Towards 2050: Reimagining Crime and Criminal Justice System in the Era of AI & ML,” exploring the impact of AI/ML on policing, cybercrime, investigation, and judicial processes.",
      status: "Completed",
      outcomes: "Gained interdisciplinary insights into AI-driven legal challenges, ethical concerns, cybercrime, and technology-responsive legal reforms, fostering awareness of the future intersection of law and technology."
    },
    {
      id: 113,
      title: "PathX Series: From Campus to Career",
      date: "May 15, 2026",
      time: "06:00 PM",
      location: "Online",
      type: "IEEE PathX",
      attendees: 30,
      maxAttendees: 50,
      description: "Conducted an IEEE PATHX Expert Series online session, “From Campus to Career: Skills, Opportunities, AI and 6G,” featuring insights on emerging technologies, career opportunities, and the skills required to succeed in the evolving tech industry.",
      status: "Completed",
      outcomes: "Participants gained valuable career guidance, industry insights, and awareness of AI, 6G, and emerging technologies, helping them better prepare for their transition from campus to professional careers."
    },
    {
      id: 114,
      title: "PathX Series: Introduction to Quantum Computing",
      date: "22 August, 2026",
      time: "06:00 PM - 07:00 PM",
      location: "Google Meet",
      type: "Seminar",
      attendees: 30,
      maxAttendees: 50,
      description: "An Expert Session on “Introduction to Quantum Computing,” providing participants with insights into quantum technologies, emerging applications, and the future of computing through expert interaction.",
      status: "Completed",
      outcomes : "The session enhanced participants’ understanding of the fundamentals of quantum computing, its emerging technologies, real-world applications, and future potential. It also encouraged curiosity and awareness about career and research opportunities in the rapidly evolving field of quantum technology."
    } 
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop":
        return "bg-purple-100 text-purple-800";
      case "Seminar":
        return "bg-blue-100 text-blue-800";
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Hackathon":
        return "bg-orange-100 text-orange-800";
      case "National Conference":
        return "bg-green-300 text-red-800";
      case "Bootcamp":
        return "bg-indigo-100 text-indigo-800";
      case "IEEE PathX":
        return "bg-yellow-100 text-yellow-800";
      case "Educational Visit":
        return "bg-yellow-100 text-blue-800";
      case "International Conference":
        return "bg-green-300 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our hands-on workshops, inspiring seminars, and exciting competitions designed to
            enhance your engineering and networking skills.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-10">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-xl bg-gray-200 dark:bg-gray-800 p-1">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-gray-700 dark:text-gray-300"
            >
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg text-gray-700 dark:text-gray-300"
            >
              Past Events
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2">
                        <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>
                          {event.attendees}/{event.maxAttendees} registered
                        </span>
                      </div>

                      {event.status === "Registration Open" && (
                        <div className="pt-4">
                          <Button
                            onClick={() => {
                              window.location.href = "https://forms.gle/YsxQdkAeTwrnYSF1A";
                            }}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all">
                            Register Now
                          </Button>
                        </div>
                      )}
                      {event.status === "Registration closed" && (
                        <div className="pt-4">
                          <Button
                            onClick={() => {
                              window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScd5PxHnqQvA0JJId7TpDfEqLEUEkBp7GjdCBcKplhcOSor6Q/closedform";
                            }}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all">
                            Feedback
                          </Button>
                        </div>
                      )}

                      {event.status === "Coming Soon" && (
                        <div className="pt-4">
                          <Button
                            variant="outline"
                            className="w-full border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                            disabled
                          >
                            Registration Opens Soon
                          </Button>
                        </div>
                      )}
                      {event.status === "Expired" && (
                        <div className="pt-4">
                          <Button
                            disabled
                            className="w-full bg-gray-400 text-white cursor-not-allowed opacity-80"
                          >
                            Registration Closed
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <Card
                  key={event.id}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2">
                        <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-700 dark:text-gray-300">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>{event.attendees} attendees</span>
                      </div>

                      {event.outcomes && (
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium text-sm mb-1 text-gray-800 dark:text-gray-200">
                            Outcomes:
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {event.outcomes}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Subscribe CTA */}
        <Card className="mt-16 text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              Stay Updated 🚀
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-base max-w-lg mx-auto">
              Subscribe to our newsletter and never miss an update on upcoming events,
              workshops, and opportunities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all"
              onClick={() => navigate('/contact')}
            >
              Subscribe to Newsletter
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>

  );
}
