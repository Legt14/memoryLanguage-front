import language from "../../data/language.json";
import { Lang } from "../../models/language.model";

import { useNavigate, useLocation, Link } from "react-router-dom";

import { useState } from "react";

const LanguageComponent = () => {
  const [selectedLearnLanguage, setSelectedLearnLanguage] =
    useState<string>("");
  const [selectedNativeLanguage, setSelectedNativeLanguage] =
    useState<string>("");

  const languages = language;

  const navigate = useNavigate();
  const location = useLocation().pathname;

  const handleLearnLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLearnLanguage(event.target.value);
  };

  const handleNativeLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedNativeLanguage(event.target.value);
  };

  const handleStartClick = () => {
    if (selectedLearnLanguage && selectedNativeLanguage) {
      const langSelected: Lang = {
        learn: selectedLearnLanguage,
        native: selectedNativeLanguage,
      };
      navigate(`${location}/play`, { state: { ...langSelected } });
    }
  };

  return (
    <>
      <section className="p-5 w-72 h-96 bg-SeaBuckthorn flex flex-col gap-5 items-center justify-between rounded-lg drop-shadow-2xl ">
        <p className="text-lg text-Shark">
          <strong>Select Language</strong>
        </p>
        <section className="flex flex-col gap-4 [&>div>label]:text-Shark/70">
          <div>
            <label htmlFor="nativeLenguage" className="text-xs">
              Native language
            </label>
            <select
              id="nativeLanguage"
              onChange={handleNativeLanguageChange}
              className="w-full focus:outline-none cursor-pointer h-10 rounded-lg p-1 bg-Shark text-[#d1cbd7]"
            >
              <option value="">Select...</option>
              {languages.map((data, index) => (
                <option value={data.id} key={index}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="learnLenguage" className="text-xs">
              Language to learn
            </label>
            <select
              id="learnLanguage"
              onChange={handleLearnLanguageChange}
              className="w-full focus:outline-none cursor-pointer h-10 rounded-lg p-1 bg-Shark text-[#d1cbd7]"
            >
              <option value="">Select...</option>

              {languages.map((data, index) => (
                <option value={data.id} key={index}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="w-full flex flex-col justify-end items-end ">
          <button
            onClick={handleStartClick}
            disabled={
              !selectedLearnLanguage ||
              !selectedNativeLanguage ||
              selectedLearnLanguage === selectedNativeLanguage
            }
            className="rounded-full p-1 w-10 h-6 cursor-pointer bg-Shark transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center"
          >
            <Link to={`memory/play`}>
              <span className="material-symbols-outlined text-base text-[#d1cbd7] ">
                double_arrow
              </span>
            </Link>
          </button>
          <section className="h-5">
            {selectedLearnLanguage === selectedNativeLanguage && (
              <p className="text-red-500 mt-2">
                Please select different languages.
              </p>
            )}
          </section>
        </section>
      </section>
    </>
  );
};

export { LanguageComponent };
