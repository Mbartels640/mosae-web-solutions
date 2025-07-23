"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/language-context";

export default function CookiePolicyPage() {
  const { lang } = useLanguage();
  const currentContent = content[lang].cookiePolicy;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1>{currentContent.title}</h1>
        <p className="lead">{currentContent.lastUpdated}</p>

        <section>
          <h2>{currentContent.whatAreCookies.title}</h2>
          <p>{currentContent.whatAreCookies.p1}</p>
        </section>

        <section>
          <h2>{currentContent.howWeUse.title}</h2>
          <p>{currentContent.howWeUse.p1}</p>
          <ul>
            {currentContent.howWeUse.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{currentContent.cookiesWeUse.title}</h2>
          <h3>{currentContent.cookiesWeUse.essential.title}</h3>
          <p>{currentContent.cookiesWeUse.essential.p1}</p>

          <h3>{currentContent.cookiesWeUse.analytics.title}</h3>
          <p>{currentContent.cookiesWeUse.analytics.p1}</p>
          <p>
            <strong>Vercel Analytics:</strong>{" "}
            {currentContent.cookiesWeUse.analytics.vercel}
          </p>
          <p>
            <strong>Google Analytics:</strong>{" "}
            {currentContent.cookiesWeUse.analytics.google}
          </p>
        </section>

        <section>
          <h2>{currentContent.managing.title}</h2>
          <p>{currentContent.managing.p1}</p>
        </section>
      </div>
    </div>
  );
}
