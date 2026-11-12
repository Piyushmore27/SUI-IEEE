import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Newspaper, Image } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import HeroSection from "../components/HeroSection";

export default function Index() {
  const upcomingEvents = [
    {
      title: "From Campus to Enterprise",
      subtitle: "Building a Career in Generative AI & Digital Transformation",
      series: "SUI-IEEE PATHX SERIES",
      date: "28 November 2026",
      time: "5:00 PM onwards (IST)",
      location: "Online — Google Meet",
      speaker: "Vishnuprasad T V",
      speakerRole: "Manager, Generative AI Consulting, EY (Big 4)",
      certificate: "Certificate of Participation",
      description: "Join us for an insightful online session in the SUI-IEEE PATHX Series, 'From Campus to Enterprise: Building a Career in Generative AI & Digital Transformation.' Featuring Vishnuprasad T V, Manager, Generative AI Consulting at EY (Big 4), this session focuses on navigating the transition from campus to the enterprise world and exploring career opportunities and professional development in Generative AI and digital transformation. Mode: Online via Google Meet. Certificate of Participation will be provided.",
      type: "IEEE PathX",
      registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdI-Z5PlM1n8F6QZ8WFadxkruYb9hXVN4Et6kjq1w_CKTcVvw/viewform?usp=header",
      speakerLinkedinUrl: "https://www.linkedin.com/in/vishnuprasad-cmd",
      whatsappCommunityUrl: "https://chat.whatsapp.com/JgWN1dVi228DWgN98xS8X6"
    },
    {
      title: "Tvishi 2.0",
      date: "Coming Soon...",
      description: "24-hour hackathon focused on developing IoT solutions for smart cities and sustainable development.",
      type: "hackthon",
    },
  ];

  const achievements = [
    {
      title: "Best Student Branch Award",
      description:
        "Recognized as the top performing student branch in Central India",
      year: "2024",
    },
    {
      title: "Technical Paper Competition",
      description: "First place in national IEEE technical paper presentation",
      year: "2024",
    },
    {
      title: "Community Service Recognition",
      description: "Outstanding contribution to engineering education outreach",
      year: "2023",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Quick Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">8</div>
              <div className="text-gray-600">Active Chapters</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Years Active</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Join us for exciting technical events and hands-on workshops
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={
                          event.type === "IEEE PathX" ? "default" : "secondary"
                        }
                        className="px-3 py-1 text-sm font-medium rounded-full"
                      >
                        {event.type}
                      </Badge>
                      {"series" in event && event.series && (
                        <Badge variant="outline" className="text-xs font-semibold border-blue-500/40 text-blue-600 dark:text-blue-400">
                          {event.series}
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {event.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </CardTitle>
                  {"subtitle" in event && event.subtitle && (
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {event.subtitle}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-grow">
                  <div>
                    {"speaker" in event && event.speaker && (
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Speaker: {event.speaker} {"speakerRole" in event && event.speakerRole ? `(${event.speakerRole})` : ""}
                      </p>
                    )}
                    <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {event.description}
                    </CardDescription>
                  </div>

                  {"registrationUrl" in event && event.registrationUrl && (
                    <div className="pt-2 space-y-2">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-all text-sm py-2"
                      >
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Register Now
                        </a>
                      </Button>
                      {("speakerLinkedinUrl" in event && event.speakerLinkedinUrl || "whatsappCommunityUrl" in event && event.whatsappCommunityUrl) && (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {"speakerLinkedinUrl" in event && event.speakerLinkedinUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-xs"
                            >
                              <a
                                href={event.speakerLinkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5"
                              >
                                <FaLinkedin className="h-3.5 w-3.5 text-[#0077B5]" />
                                <span>LinkedIn</span>
                              </a>
                            </Button>
                          )}
                          {"whatsappCommunityUrl" in event && event.whatsappCommunityUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 text-xs"
                            >
                              <a
                                href={event.whatsappCommunityUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5"
                              >
                                <FaWhatsapp className="h-3.5 w-3.5 text-[#25D366]" />
                                <span>WhatsApp</span>
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/events">
                <CardHeader>
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Workshops, seminars, and technical events
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/chapters">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Chapters</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Specialized technical societies and groups
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/news">
                <CardHeader>
                  <Newspaper className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>News</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Latest updates and announcements
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <Link to="/gallery">
                <CardHeader>
                  <Image className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Photos and videos from our events
                  </CardDescription>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}
