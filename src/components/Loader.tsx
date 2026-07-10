// components/Loader.jsx

import { Bus, Plane } from "lucide-react";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <div className="relative w-72 h-12 overflow-hidden">
                {/* Runway */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full -translate-y-1/2" />

                {/* Animated Plane */}
                <div className="absolute top-1/2 -translate-y-1/2 animate-plane">
                    <Bus
                        className="w-8 h-8 text-blue-600"
                    />
                </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold">
                <span className="text-[#F25A29]">Trip</span>
                <span className="text-[#2FAE5B]">With</span>
                <span className="text-[#2E7DDB]">Me</span>
            </h2>

            <p className="mt-2 text-gray-500">
                Loading your next adventure...
            </p>
        </div>
    );
}