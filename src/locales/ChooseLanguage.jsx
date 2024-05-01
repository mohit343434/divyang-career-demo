import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "English" },

    { code: "hi", lang: "Hindi" },
    { code: "bho", lang: "Bhojpuri" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    // useEffect(() => {
    //     document.body.dir = i18n.dir();
    // }, [i18n, i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="btn-container p-5 flex gap-4">
            {languages.map((lng) => {
                return (
                    <button
                        className={lng.code === i18n.language ? "selected" : ""}
                        key={lng.code}
                        onClick={() => changeLanguage(lng.code)}
                    >
                        {lng.lang}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSelector;
