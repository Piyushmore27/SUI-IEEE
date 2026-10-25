
import { useParams, Link } from "react-router-dom";
import { alumniData } from "@/data/alumniData";
import { Badge } from "@/components/ui/badge";
import { AlumniAvatar } from "@/components/AlumniCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  User,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function AlumniProfile() {
  const { slug } = useParams<{ slug: string }>();
  const alumni = alumniData.find((a) => a.slug === slug);

  if (!alumni) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-4xl font-extrabold mb-4">
              Alumni Not Found
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-md">
              The alumni profile you are looking for does not exist or may have
              been removed.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all"
            >
              <Link to="/alumni">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Alumni
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Link to="/alumni">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Alumni
            </Link>
          </Button>
        </div>

        <div className="space-y-8">
          {/* Section 1: Hero & Profile Introduction */}
          <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-xl dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardHeader className="flex flex-col items-center pt-10 pb-6 px-6 sm:px-10">
              {/* Profile Avatar with Image and Initials Fallback */}
              <AlumniAvatar name={alumni.name} image={alumni.image} size="profile" />

              {/* Name */}
              <CardTitle className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
                {alumni.name}
              </CardTitle>

              {/* Current Title & Organization */}
              {alumni.title && (
                <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 text-center mb-1">
                  {alumni.title}
                  {alumni.organization ? ` — ${alumni.organization}` : ""}
                </p>
              )}

              {/* Location */}
              {alumni.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">
                  {alumni.location}
                </p>
              )}

              {/* Details Badge */}
              {alumni.details && (
                <Badge className="w-fit mx-auto bg-indigo-600/40 text-indigo-100 px-4 py-1.5 text-sm font-medium rounded-full mb-3">
                  {alumni.details}
                </Badge>
              )}

              {/* Section 8: LinkedIn Profile Link (Top CTA) */}
              {alumni.linkedinUrl && (
                <div className="flex justify-center mt-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md"
                  >
                    <a
                      href={alumni.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="h-4 w-4 mr-2" />
                      View LinkedIn Profile
                    </a>
                  </Button>
                </div>
              )}

              {/* Profile Introduction Callout */}
              {alumni.introduction && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 w-full text-center max-w-2xl">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                    {alumni.introduction}
                  </p>
                </div>
              )}
            </CardHeader>
          </Card>

          {/* Section 2: Professional Biography */}
          {alumni.biography && alumni.biography.length > 0 && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <User className="h-6 w-6 text-indigo-500" />
                  Professional Biography
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {alumni.biography.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Section 3: SUI-IEEE Journey */}
          {alumni.ieeeJourney && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Award className="h-6 w-6 text-indigo-500" />
                  SUI-IEEE Journey
                </CardTitle>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {alumni.ieeeJourney.role}
                  </span>
                  <span className="text-gray-400">|</span>
                  <Badge className="bg-indigo-600/40 text-indigo-100 px-3 py-1 text-sm font-medium rounded-full">
                    {alumni.ieeeJourney.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {alumni.ieeeJourney.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Section 4: Professional Experience */}
          {alumni.experience && alumni.experience.length > 0 && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-indigo-500" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  {alumni.experience.map((exp, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-indigo-500/50 dark:border-indigo-500/30 space-y-1.5"
                    >
                      <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-gray-800" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.role}{" "}
                          <span className="font-normal text-gray-500 dark:text-gray-400">
                            —
                          </span>{" "}
                          {exp.organization}
                        </h3>
                        {exp.period && (
                          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full w-fit">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      {exp.description && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-1">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 5: Research and Innovation */}
          {alumni.research && alumni.research.length > 0 && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <FileText className="h-6 w-6 text-indigo-500" />
                  Research and Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                {alumni.research.map((res, idx) => (
                  <div key={idx} className="space-y-3">
                    <Badge className="bg-indigo-600/40 text-indigo-100 px-3 py-1 text-xs font-medium rounded-full">
                      {res.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {res.title}
                    </h3>
                    {res.applicationNumber && (
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Application Number:{" "}
                        <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                          {res.applicationNumber}
                        </span>
                      </p>
                    )}
                    <div className="space-y-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed pt-1">
                      {res.description.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Section 6: Education */}
          {alumni.education && alumni.education.length > 0 && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-indigo-500" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                {alumni.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      {edu.period && (
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full w-fit">
                          {edu.period}
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium text-base">
                      {edu.program}
                    </p>
                    {edu.details && (
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Section 7: Areas of Expertise */}
          {alumni.expertise && alumni.expertise.length > 0 && (
            <Card className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold">
                  Areas of Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2.5">
                  {alumni.expertise.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-indigo-600/30 text-indigo-900 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800/60 px-3.5 py-1.5 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Section 8: LinkedIn Link (Bottom CTA) */}
          {alumni.linkedinUrl && (
            <div className="flex justify-center pt-2 pb-6">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg text-base"
              >
                <a
                  href={alumni.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-5 w-5 mr-2" />
                  Connect with {alumni.name} on LinkedIn
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
