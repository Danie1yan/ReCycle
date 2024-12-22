"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    const handleSkip = () => {
        router.push("/language");
    };

    const handleNextSlide = () => {
        if (currentSlide < 2) {
            setCurrentSlide(currentSlide + 1);
        } else {
            router.push("/language");
        }
    };

    const slides = [
        {
            id: 0,
            src: "image1.jpg",
            title: "Welcome to Recycle",
            text: "Helping you recycle smarter, live greener, and make a difference every day.",
        },
        {
            id: 1,
            src: "image2.jpg",
            title: "Scan & Recycle",
            text: "Not sure how to recycle? Just scan the item, and we'll guide you!",
        },
        {
            id: 2,
            src: "image3.jpg",
            title: "Get Eco Points",
            text: "Get rewarded for every eco-friendly action. Recycle more, earn more, and make a positive impact on the planet!",
        },
    ];

    return (
        <div className="relative w-full h-full overflow-hidden">
            <button
                className="absolute top-[50px] z-20 right-4 text-black underline text-lg"
                onClick={handleSkip}
            >
                Skip
            </button>

            <div
                className="flex transition-transform duration-500 mt-[80px]"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        onClick={handleNextSlide}
                        className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center"
                    >
                        <img
                            src={slide.src}
                            alt={`Slide ${slide.id + 1}`}
                            className="w-full object-contain"
                        />
                        <h2 className="mt-3 text-green-600 text-xl font-bold">
                            {slide.title}
                        </h2>
                        <p className="text-gray-500 text-center px-6">
                            {slide.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 w-full flex justify-center space-x-2">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === slide.id
                                ? "bg-green-500"
                                : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
