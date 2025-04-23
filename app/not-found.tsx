'use client';

import Link from "next/link";
import { Button } from "./components/ui/button";
import { PageTransition } from "./components/ui/motion-section";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-24">
        <div className="text-center max-w-xl">
          <h1 className="text-6xl font-bold mb-6 font-montserrat">404</h1>
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild size="lg" className="bg-[#232625] hover:bg-[#232625]/80 text-white">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}