
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Alumni } from "@/data/alumniData";

/**
 * Dynamically generates initials from an alumnus's name.
 * Example: "Raj Thakur" -> "RT"
 */
export function getAlumniInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export interface AlumniAvatarProps {
  name: string;
  image?: string;
  size?: "card" | "profile";
  className?: string;
}

/**
 * Reusable avatar component for Alumni members.
 * Tries to load the real photograph if available; on missing image or error,
 * automatically falls back to clean, theme-consistent dynamic initials.
 */
export function AlumniAvatar({
  name,
  image,
  size = "card",
  className = "",
}: AlumniAvatarProps) {
  const [hasError, setHasError] = useState(false);
  const initials = getAlumniInitials(name);

  const sizeClasses =
    size === "profile"
      ? "h-36 w-36 text-4xl shadow-lg mb-6"
      : "h-24 w-24 text-2xl shadow-md mb-5";

  const showImage = Boolean(image && !hasError);

  return (
    <div
      className={`relative rounded-full overflow-hidden ring-4 ring-indigo-500 flex items-center justify-center bg-gray-100 dark:bg-gray-800 shrink-0 ${sizeClasses} ${className}`}
    >
      {showImage ? (
        <img
          src={image}
          alt={name}
          onError={() => setHasError(true)}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="font-bold text-indigo-600 dark:text-indigo-400 select-none">
          {initials}
        </span>
      )}
    </div>
  );
}

interface AlumniCardProps {
  alumni: Alumni;
}

export function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <Link
      to={`/alumni/${alumni.slug}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl h-full"
    >
      <Card
        className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-3xl shadow-lg dark:shadow-gray-800 p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full"
      >
        {/* Profile Avatar with Image and Initials Fallback */}
        <AlumniAvatar name={alumni.name} image={alumni.image} size="card" />

        {/* Name & Details */}
        <CardHeader className="text-center space-y-2 p-0 flex flex-col items-center flex-1 w-full">
          <CardTitle className="text-xl font-semibold mb-0">
            {alumni.name}
          </CardTitle>
          {alumni.details && (
            <Badge className="w-fit mx-auto bg-indigo-600/40 text-indigo-100 px-3 py-1 text-sm font-medium rounded-full">
              {alumni.details}
            </Badge>
          )}
          {alumni.introduction && (
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center mt-3 leading-relaxed">
              {alumni.introduction}
            </p>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
