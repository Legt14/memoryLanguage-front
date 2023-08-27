import { CardsComponnet } from "./components/cards/cards";
import { LanguageComponent } from "./components/language/language";
import { useState } from "react";

function App() {
  const [selectedLanguages, setSelectedLanguages] = useState<{
    learn: string;
    native: string;
  }>();

  const handleLanguageSelect = (
    learnLanguage: string,
    nativeLanguage: string
  ) => {
    setSelectedLanguages({ learn: learnLanguage, native: nativeLanguage });
  };

  return (
    <>
      <main className="p-5 min-h-screen min-w-screen flex flex-col items-center justify-center bg-Mercury font-Ubuntu">
        {selectedLanguages ? (
          <CardsComponnet
            learnLanguage={selectedLanguages.learn}
            nativeLanguage={selectedLanguages.native}
          />
        ) : (
          <LanguageComponent onSelect={handleLanguageSelect} />
        )}
      </main>
    </>
  );
}

export default App;
