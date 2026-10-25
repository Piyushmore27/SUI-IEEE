
import { alumniData } from "@/data/alumniData";
import { AlumniCard } from "@/components/AlumniCard";
import { Users } from "lucide-react";

export default function Alumni() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Alumni
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating the people who have been part of the SUI-IEEE Student
            Branch community and the journeys they continue to build.
          </p>
        </div>

        {/* Alumni Grid or Empty State */}
        {alumniData.length > 0 ? (
          <div className="mb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumniData.map((alumni) => (
                <AlumniCard key={alumni.slug} alumni={alumni} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="relative h-20 w-20 rounded-full overflow-hidden ring-4 ring-indigo-500 mb-6 shadow-md flex items-center justify-center bg-white dark:bg-gray-800">
              <Users className="h-10 w-10 text-indigo-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              Alumni profiles coming soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              We are gathering verified profiles of our past Student Branch
              members. Alumni entries will appear here once they are added by the
              website maintainer.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
