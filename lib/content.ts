export type Language = "nl" | "de" | "en";

export const content = {
  nl: {
    nav: {
      services: "Diensten",
      contact: "Contact",
    },
    hero: {
      title: "Traditie verbinden met digitale excellentie",
      subtitle:
        "Mosae Web Solutions verbindt jouw lokale bedrijf met de digitale wereld, zoals het historische Trajectum Mosae ooit de oevers van de Maas met elkaar verbond.",
      body: "Of je nu een restaurant runt, een lokale winkel hebt of als zelfstandige werkt, wij slaan de brug tussen jouw vakmanschap en online succes. Met persoonlijke service, duidelijke prijzen en heldere communicatie zorgen we dat je online goed vindbaar bent en nieuwe klanten bereikt.",
      cta: "Contact opnemen",
    },
    services: {
      title: "Onze Diensten",
      subtitle:
        "Wij begrijpen hoe belangrijk jouw bedrijf is – en bouwen websites die dat uitstralen.",
      items: [
        {
          title: "Nieuwe Website",
          description: "Een compleet pakket om je bedrijf online te lanceren.",
          features: [
            "IP-registratie & hosting",
            "Webdesign op maat",
            "Volledige realisatie",
            "Basis SEO voor betere vindbaarheid",
          ],
        },
        {
          title: "Website Updaten",
          description: "Je bestaande website moderniseren of uitbreiden.",
          features: [
            "Aanpassingen aan bestaande websites",
            "Nieuwe content of functionaliteiten",
            "Modernisering van het design",
            "Responsief maken voor mobiel",
          ],
        },
        {
          title: "Onderhoud & SEO Verbetering",
          description: "Zorgeloos je website up-to-date en vindbaar houden.",
          features: [
            "Regelmatige updates en backups",
            "Technische optimalisatie",
            "Snelheidsverbeteringen",
            "SEO audits en metadata",
          ],
        },
      ],
    },
    contact: {
      title: "Neem Contact Op",
      description:
        "Klaar om de volgende stap te zetten? Vul het formulier in en we nemen snel contact op.",
      nameLabel: "Naam (verplicht)",
      namePlaceholder: "Jouw naam",
      emailLabel: "E-mailadres (verplicht)",
      emailPlaceholder: "Jouw e-mailadres (verplicht)",
      companyLabel: "Bedrijfsnaam (verplicht)",
      companyPlaceholder: "Naam van je bedrijf",
      servicesLabel: "Geïnteresseerde dienst(en)",
      messageLabel: "Bericht / toelichting (verplicht)",
      messagePlaceholder: "Vertel ons meer over je project...",
      privacyLabel:
        "Ik ga akkoord met de verwerking van mijn gegevens zoals beschreven in het",
      privacyLinkText: "privacybeleid",
      submitButton: "Verstuur Bericht",
      successMessage:
        "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
      errorMessage: "Er is iets misgegaan. Probeer het later opnieuw.",
      recaptchaError: "Er is iets misgegaan. Probeer het later opnieuw.",
    },
    footer: {
      rights: "Alle rechten voorbehouden.",
    },
    cookiePolicy: {
      title: "Cookiebeleid",
      lastUpdated: "Laatst bijgewerkt: 22 juli 2025",
      whatAreCookies: {
        title: "Wat zijn cookies?",
        p1: "Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat worden geplaatst wanneer u een website bezoekt. Ze worden veel gebruikt om websites te laten werken, of efficiënter te laten werken, en om rapportage informatie te verstrekken.",
      },
      howWeUse: {
        title: "Hoe gebruiken wij cookies?",
        p1: "We gebruiken cookies voor verschillende doeleinden:",
        list: [
          "Om de voorkeur van uw cookie toestemming op te slaan.",
          "Om anonieme, geaggregeerde statistieken te verzamelen over het gebruik van onze website.",
        ],
      },
      cookiesWeUse: {
        title: "Cookies die wij gebruiken",
        essential: {
          title: "Essentiële Cookies",
          p1: "We gebruiken een functionele cookie (via localStorage) om uw toestemmingskeuze te onthouden. Deze cookie is essentieel voor de werking van de site en slaat geen persoonlijke informatie op.",
        },
        analytics: {
          title: "Analytische Cookies",
          p1: "Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken. Deze informatie is anoniem en wordt gebruikt om de site te verbeteren.",
          vercel:
            "Deze dienst van Vercel verzamelt prestatie en gebruiksgegevens zonder cookies te gebruiken en zonder individuele bezoekers te volgen. Het is volledig anoniem en privacy vriendelijk.",
          google:
            "Deze dienst van Google helpt ons het verkeer op de website te analyseren. Het plaatst cookies om unieke gebruikers te onderscheiden en het aantal bezoeken bij te houden. Dit script wordt alleen geactiveerd nadat u expliciet toestemming heeft gegeven.",
        },
      },
      managing: {
        title: "Uw cookie voorkeuren beheren",
        p1: "U kunt uw cookie instellingen op elk moment wijzigen door de cookies in uw browser te wissen. Hierdoor wordt uw toestemming gereset en kunt u bij uw volgende bezoek een nieuwe keuze maken.",
      },
    },
    privacyPolicy: {
      title: "Privacybeleid",
      lastUpdated: "Laatst bijgewerkt: 22 juli 2025",
      introduction: {
        title: "Introductie",
        p1: "Mosae Web Solutions, gevestigd in Maastricht, hecht veel waarde aan uw privacy. In dit beleid leggen we uit welke persoonsgegevens we verzamelen en gebruiken, met welk doel we dit doen en hoe we ervoor zorgen dat uw gegevens veilig zijn.",
      },
      dataWeCollect: {
        title: "Gegevens die we verzamelen via het contactformulier",
        p1: "Wanneer u ons contactformulier invult, vragen wij u om de volgende gegevens:",
        list: [
          "Naam (verplicht)",
          "Bedrijfsnaam (optioneel)",
          "Geïnteresseerde dienst(en) (optioneel)",
          "Bericht / toelichting (verplicht)",
        ],
      },
      howWeUseData: {
        title: "Hoe we uw gegevens gebruiken",
        p1: "De gegevens die u via het contactformulier verstrekt, worden uitsluitend gebruikt om contact met u op te nemen naar aanleiding van uw vraag of opmerking. We zullen uw gegevens niet gebruiken voor marketingdoeleinden, tenzij u daar expliciet toestemming voor geeft, en we zullen ze nooit verkopen aan derden.",
      },
      dataStorage: {
        title: "Opslag en beveiliging van gegevens",
        p1: "Uw gegevens worden veilig opgeslagen in ons e-mailsysteem en/of CRM. We bewaren de gegevens niet langer dan strikt noodzakelijk is om het doel te realiseren waarvoor uw gegevens worden verzameld. Voor contactaanvragen betekent dit doorgaans tot de communicatie is afgerond, tenzij er een klantrelatie ontstaat.",
      },
      yourRights: {
        title: "Uw rechten",
        p1: "U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te laten verwijderen. U kunt ook bezwaar maken tegen de verwerking van uw gegevens. Hiervoor kunt u contact met ons opnemen.",
        list: [
          "Recht op inzage",
          "Recht op rectificatie",
          "Recht op vergetelheid (verwijdering)",
        ],
      },
      contactUs: {
        title: "Contact opnemen",
        p1: "Als u vragen heeft over dit privacybeleid, neem dan contact met ons op via de gegevens op onze contactpagina.",
      },
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      contact: "Kontakt",
    },
    hero: {
      title: "Tradition mit digitaler Exzellenz verbinden",
      subtitle:
        "Mosae Web Solutions verbindet dein lokales Unternehmen mit der digitalen Welt, so wie das historische Trajectum Mosae einst die Ufer der Maas verband.",
      body: "Egal, ob Sie ein Restaurant betreiben, ein lokales Geschäft haben oder selbstständig sind, wir sorgen dafür, dass Sie online gut gefunden werden. Mit persönlichem Service, transparenten Preisen und klarer Kommunikation bringen wir Sie digital voran.",
      cta: "Kontakt aufnehmen",
    },
    services: {
      title: "Unsere Leistungen",
      subtitle:
        "Wir verstehen, wie wichtig Ihr Unternehmen ist – und erstellen Websites, die das ausstrahlen.",
      items: [
        {
          title: "Neue Webseite",
          description:
            "Ein Komplettpaket, um Ihr Unternehmen online zu starten.",
          features: [
            "IP-Registrierung & Hosting",
            "Maßgeschneidertes Webdesign",
            "Vollständige Umsetzung",
            "Grundlegende SEO für bessere Auffindbarkeit",
          ],
        },
        {
          title: "Webseiten Update",
          description: "Ihre bestehende Website modernisieren oder erweitern.",
          features: [
            "Anpassungen an bestehenden Websites",
            "Neue Inhalte oder Funktionalitäten",
            "Modernisierung des Designs",
            "Responsive für mobile Geräte",
          ],
        },
        {
          title: "Wartung & SEO Optimierung",
          description: "Ihre Website sorgenfrei aktuell und auffindbar halten.",
          features: [
            "Regelmäßige Updates und Backups",
            "Technische Optimierung",
            "Geschwindigkeitsverbesserungen",
            "SEO Audits und Metadaten",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      description:
        "Bereit für den nächsten Schritt? Füllen Sie das Formular aus und wir melden uns schnellstmöglich.",
      nameLabel: "Name (erforderlich)",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail (erforderlich)",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      companyLabel: "Firmenname (optional)",
      companyPlaceholder: "Name Ihrer Firma",
      servicesLabel: "Interessierte Leistung(en)",
      messageLabel: "Nachricht / Erläuterung (erforderlich)",
      messagePlaceholder: "Erzählen Sie uns mehr über Ihr Projekt...",
      privacyLabel: "Ich stimme der Verarbeitung meiner Daten wie in der",
      privacyLinkText: "Datenschutzerklärung",
      submitButton: "Nachricht senden",
      successMessage:
        "Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.",
      errorMessage:
        "Etwas ist schiefgegangen. Bitte versuchen Sie es später erneut.",
      recaptchaError: "Etwas ist schiefgegangen. Bitte versuchen Sie es später erneut.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    cookiePolicy: {
      title: "Cookie Richtlinie",
      lastUpdated: "Zuletzt aktualisiert: 22. Juli 2025",
      whatAreCookies: {
        title: "Was sind Cookies?",
        p1: "Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät platziert werden, wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites funktionsfähig oder effizienter zu machen und um Berichtsinformationen bereitzustellen.",
      },
      howWeUse: {
        title: "Wie verwenden wir Cookies?",
        p1: "Wir verwenden Cookies für verschiedene Zwecke:",
        list: [
          "Um Ihre Cookie Einwilligungspräferenz zu speichern.",
          "Um anonyme, aggregierte Statistiken über die Nutzung unserer Website zu sammeln.",
        ],
      },
      cookiesWeUse: {
        title: "Von uns verwendete Cookies",
        essential: {
          title: "Wesentliche Cookies",
          p1: "Wir verwenden ein funktionales Cookie (über localStorage), um Ihre Einwilligungsentscheidung zu speichern. Dieses Cookie ist für den Betrieb der Website unerlässlich und speichert keine persönlichen Informationen.",
        },
        analytics: {
          title: "Analyse Cookies",
          p1: "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Diese Informationen sind anonym und werden zur Verbesserung der Website verwendet.",
          vercel:
            "Dieser Dienst von Vercel sammelt Leistungs und Nutzungsdaten, ohne Cookies zu verwenden und ohne einzelne Besucher zu verfolgen. Er ist vollständig anonym und datenschutzfreundlich.",
          google:
            "Dieser Dienst von Google hilft uns, den Website Verkehr zu analysieren. Er setzt Cookies, um eindeutige Benutzer zu unterscheiden und Besuche zu zählen. Dieses Skript wird nur aktiviert, nachdem Sie ausdrücklich Ihre Zustimmung gegeben haben.",
        },
      },
      managing: {
        title: "Verwaltung Ihrer Cookie Einstellungen",
        p1: "Sie können Ihre Cookie Einstellungen jederzeit ändern, indem Sie die Cookies in Ihrem Browser löschen. Dadurch wird Ihre Einwilligung zurückgesetzt und Sie können bei Ihrem nächsten Besuch eine neue Wahl treffen.",
      },
    },
    privacyPolicy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 22. Juli 2025",
      introduction: {
        title: "Einführung",
        p1: "Mosae Web Solutions mit Sitz in Maastricht legt großen Wert auf Ihre Privatsphäre. In dieser Richtlinie erklären wir, welche personenbezogenen Daten wir erheben und verwenden, zu welchem Zweck wir dies tun und wie wir sicherstellen, dass Ihre Daten sicher sind.",
      },
      dataWeCollect: {
        title: "Daten, die wir über das Kontaktformular erheben",
        p1: "Wenn Sie unser Kontaktformular ausfüllen, bitten wir Sie um folgende Daten:",
        list: [
          "Name (erforderlich)",
          "Firmenname (optional)",
          "Interessierte Dienstleistung(en) (optional)",
          "Nachricht / Erläuterung (erforderlich)",
        ],
      },
      howWeUseData: {
        title: "Wie wir Ihre Daten verwenden",
        p1: "Die von Ihnen über das Kontaktformular bereitgestellten Daten werden ausschließlich verwendet, um Sie bezüglich Ihrer Frage oder Ihres Kommentars zu kontaktieren. Wir werden Ihre Daten nicht für Marketingzwecke verwenden, es sei denn, Sie geben Ihre ausdrückliche Zustimmung, und wir werden sie niemals an Dritte verkaufen.",
      },
      dataStorage: {
        title: "Datenspeicherung und sicherheit",
        p1: "Ihre Daten werden sicher in unserem E-Mail System und/oder CRM gespeichert. Wir speichern die Daten nicht länger als unbedingt erforderlich, um den Zweck zu erreichen, für den Ihre Daten erhoben werden. Bei Kontaktanfragen bedeutet dies in der Regel, bis die Kommunikation abgeschlossen ist, es sei denn, es entsteht eine Kundenbeziehung.",
      },
      yourRights: {
        title: "Ihre Rechte",
        p1: "Sie haben das Recht, Ihre personenbezogenen Daten einzusehen, zu korrigieren oder löschen zu lassen. Sie können auch der Verarbeitung Ihrer Daten widersprechen. Hierfür können Sie uns kontaktieren.",
        list: [
          "Auskunftsrecht",
          "Recht auf Berichtigung",
          "Recht auf Vergessenwerden (Löschung)",
        ],
      },
      contactUs: {
        title: "Kontakt",
        p1: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über die Angaben auf unserer Kontaktseite.",
      },
    },
  },
  en: {
    nav: {
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Bridging Tradition with Digital Excellence",
      subtitle:
        "Mosae Web Solutions connects your local business to the digital world, just like the historic Trajectum Mosae once connected the banks of the Meuse River.",
      body: "Whether you run a restaurant, own a local shop, or work as a freelancer, we ensure you are easily found online. With personal service, transparent pricing, and clear communication, we help you move forward digitally.",
      cta: "Get in Touch",
    },
    services: {
      title: "Our Services",
      subtitle:
        "We understand how important your business is – and we build websites that reflect that.",
      items: [
        {
          title: "New Website",
          description: "A complete package to launch your business online.",
          features: [
            "IP registration & hosting",
            "Custom web design",
            "Full implementation",
            "Basic SEO for better visibility",
          ],
        },
        {
          title: "Website Update",
          description: "Modernize or expand your existing website.",
          features: [
            "Adjustments to existing websites",
            "New content or functionalities",
            "Design modernization",
            "Responsive for mobile use",
          ],
        },
        {
          title: "Maintenance & SEO Improvement",
          description: "Keep your website up-to-date and findable, worry free.",
          features: [
            "Regular updates and backups",
            "Technical optimization",
            "Speed improvements",
            "SEO audits and metadata",
          ],
        },
      ],
    },
    contact: {
      title: "Contact Us",
      description:
        "Ready to take the next step? Fill out the form, and we'll get in touch soon.",
      nameLabel: "Name (required)",
      namePlaceholder: "Your name",
      emailLabel: "Email (required)",
      emailPlaceholder: "Your email address",
      companyLabel: "Company Name (optional)",
      companyPlaceholder: "Your company's name",
      servicesLabel: "Interested service(s)",
      messageLabel: "Message / explanation (required)",
      messagePlaceholder: "Tell us more about your project...",
      privacyLabel: "I agree to the processing of my data as described in the",
      privacyLinkText: "privacy policy",
      submitButton: "Send Message",
      successMessage:
        "Thank you for your message! We will get back to you as soon as possible.",
      errorMessage: "Something went wrong. Please try again later.",
      recaptchaError: "Something went wrong. Please try again later.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    cookiePolicy: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: July 22, 2025",
      whatAreCookies: {
        title: "What are cookies?",
        p1: "Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.",
      },
      howWeUse: {
        title: "How do we use cookies?",
        p1: "We use cookies for several purposes:",
        list: [
          "To store your cookie consent preference.",
          "To collect anonymous, aggregated statistics about the use of our website.",
        ],
      },
      cookiesWeUse: {
        title: "Cookies We Use",
        essential: {
          title: "Essential Cookies",
          p1: "We use a functional cookie (via localStorage) to remember your consent choice. This cookie is essential for the site's operation and does not store any personal information.",
        },
        analytics: {
          title: "Analytics Cookies",
          p1: "These cookies help us understand how visitors use our website. This information is anonymous and is used to improve the site.",
          vercel:
            "This service from Vercel collects performance and usage data without using cookies and without tracking individual visitors. It is completely anonymous and privacy friendly.",
          google:
            "This service from Google helps us analyze website traffic. It places cookies to distinguish unique users and track visits. This script is only activated after you have given your explicit consent.",
        },
      },
      managing: {
        title: "Managing your cookie preferences",
        p1: "You can change your cookie settings at any time by clearing the cookies in your browser. This will reset your consent, allowing you to make a new choice on your next visit.",
      },
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: July 22, 2025",
      introduction: {
        title: "Introduction",
        p1: "Mosae Web Solutions, located in Maastricht, values your privacy. In this policy, we explain what personal data we collect and use, for what purpose we do so, and how we ensure your data is secure.",
      },
      dataWeCollect: {
        title: "Data we collect via the contact form",
        p1: "When you fill out our contact form, we ask for the following information:",
        list: [
          "Name (required)",
          "Company Name (optional)",
          "Interested service(s) (optional)",
          "Message / explanation (required)",
        ],
      },
      howWeUseData: {
        title: "How we use your data",
        p1: "The data you provide via the contact form is used exclusively to contact you regarding your question or comment. We will not use your data for marketing purposes unless you give your explicit consent, and we will never sell it to third parties.",
      },
      dataStorage: {
        title: "Data storage and security",
        p1: "Your data is stored securely in our email system and/or CRM. We do not store the data for longer than is strictly necessary to achieve the purpose for which your data is collected. For contact requests, this usually means until the communication is complete, unless a customer relationship is established.",
      },
      yourRights: {
        title: "Your rights",
        p1: "You have the right to access, correct, or delete your personal data. You can also object to the processing of your data. To do so, please contact us.",
        list: [
          "Right of access",
          "Right to rectification",
          "Right to erasure (to be forgotten)",
        ],
      },
      contactUs: {
        title: "Contact Us",
        p1: "If you have any questions about this privacy policy, please contact us using the details on our contact page.",
      },
    },
  },
};
