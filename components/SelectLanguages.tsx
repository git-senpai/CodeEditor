"use client";
import { languageOptions } from "@/config/config";
import {
  SiJavascript,
  SiPython,
  SiC,
  SiTypescript,
  SiGo,
  SiRust,
  SiRuby,
  SiPhp,
  SiCsharp,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { cn } from "@/lib/utils";

const languageIcons: { [key: string]: JSX.Element } = {
  javascript: <SiJavascript className="w-6 h-6" />,
  python: <SiPython className="w-6 h-6" />,
  java: <DiJava className="w-6 h-6" />,
  csharp: <SiCsharp className="w-6 h-6" />,
  c: <SiC className="w-6 h-6" />,
  typescript: <SiTypescript className="w-6 h-6" />,
  go: <SiGo className="w-6 h-6" />,
  rust: <SiRust className="w-6 h-6" />,
  ruby: <SiRuby className="w-6 h-6" />,
  php: <SiPhp className="w-6 h-6" />,
};

export interface selectedLanguageOptionProps {
  language: string;
  version: string;
  aliases: string[];
  runtime?: string;
}

const SelectLanguages = ({
  onSelect,
  selectedLanguageOption,
}: {
  onSelect: any;
  selectedLanguageOption: selectedLanguageOptionProps;
}) => {
  return (
    <div className="h-screen w-16 fixed left-0 top-0 bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
      <div className="py-6">
        <div className="space-y-2">
          {languageOptions.map((item) => (
            <button
              key={item.language}
              onClick={() => onSelect(item)}
              className={cn(
                "w-full flex justify-center p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 relative group",
                selectedLanguageOption.language === item.language
                  ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-700 dark:text-gray-300"
              )}
              title={`${item.language} (${item.version})`}
            >
              {languageIcons[item.language.toLowerCase()]}
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                {item.language} ({item.version})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectLanguages;
