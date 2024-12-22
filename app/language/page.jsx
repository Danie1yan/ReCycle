"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Languages() {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
        const router = useRouter();

    const languages = [
        { id: 1, name: "English", flag: "🇬🇧" },
        { id: 2, name: "Italian", flag: "🇮🇹" },
        { id: 3, name: "Chinese", flag: "🇨🇳" },
        { id: 4, name: "French", flag: "🇫🇷" },
        { id: 5, name: "German", flag: "🇩🇪" },
        { id: 6, name: "Spanish", flag: "🇪🇸" },
        { id: 7, name: "Russian", flag: "🇷🇺" },
    ];

    const handleLanguageClick = (languageName) => {
        setSelectedLanguage(languageName);
    };

    return (
        <div className="flex flex-col items-center p-4 mt-[70px]">
            <h1 className="text-2xl font-bold mb-4 text-black">Choose the language</h1>
            <input
                type="text"
                placeholder="Search"
                className="w-full border px-2 py-1 mb-4 rounded"
            />
            <ul className="w-full">
                {languages.map((language) => (
                    <li
                        key={language.id}
                        onClick={() => handleLanguageClick(language.name)}
                        className={`flex items-center justify-between p-3 border-b cursor-pointer`}
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-black">{language.name}</span>
                        </div>
                        {selectedLanguage === language.name && (
                            <span className="text-green-500">✔</span>
                        )}
                    </li>
                ))}
            </ul>
            <button
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded disabled:bg-gray-300"
                onClick={() => {router.push("/main")}}
            >
                Continue
            </button>
        </div>
    );
}
