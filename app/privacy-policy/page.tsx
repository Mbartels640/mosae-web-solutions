"use client";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/language-context";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const currentContent = content[lang].privacyPolicy;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1>{currentContent.title}</h1>
        <p className="lead">{currentContent.lastUpdated}</p>

        <section>
          <h2>{currentContent.introduction.title}</h2>
          <p>{currentContent.introduction.p1}</p>
        </section>

        <section>
          <h2>{currentContent.dataWeCollect.title}</h2>
          <p>{currentContent.dataWeCollect.p1}</p>
          <ul>
            {currentContent.dataWeCollect.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{currentContent.howWeUseData.title}</h2>
          <p>{currentContent.howWeUseData.p1}</p>
        </section>

        <section>
          <h2>{currentContent.dataStorage.title}</h2>
          <p>{currentContent.dataStorage.p1}</p>
        </section>

        <section>
          <h2>{currentContent.yourRights.title}</h2>
          <p>{currentContent.yourRights.p1}</p>
          <ul>
            {currentContent.yourRights.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{currentContent.contactUs.title}</h2>
          <p>{currentContent.contactUs.p1}</p>
        </section>
      </div>
    </div>
  );
}
