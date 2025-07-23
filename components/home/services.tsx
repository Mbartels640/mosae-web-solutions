import {motion} from "framer-motion";
import {fadeInUp, staggerContainer} from "@/lib/framer-variants";
import {serviceIcons} from "@/components/ServiceIcons";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CheckCircle} from "lucide-react";
import {useLanguage} from "@/context/language-context";
import {content} from "@/lib/content";

export function Services() {
    const { lang } = useLanguage();
    const currentContent = content[lang];

    return (
        <section
            id="services"
            className="w-full bg-gray-50 dark:bg-gray-900 py-20 md:py-24 lg:py-32"
        >
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-gray-50">
                        {currentContent.services.title}
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 md:text-xl">
                        {currentContent.services.subtitle}
                    </p>
                </motion.div>
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {currentContent.services.items.map((service, index) => {
                        const IconComponent = serviceIcons[index];

                        // Define gradient backgrounds for each service
                        const gradientBackgrounds = [
                            "bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-700",
                            "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-700",
                            "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-gray-800 dark:to-gray-700",
                        ];

                        return (
                            <motion.div key={service.title} variants={fadeInUp}>
                                <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 p-0 border-l-4 border-red-600">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                        className="h-full"
                                    >
                                        <div className={`h-48 w-full ${gradientBackgrounds[index]} flex items-center justify-center`}>
                                            <IconComponent />
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <CardHeader className="p-0 pb-4">
                                                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
                                                    {service.description}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="flex-1 p-0">
                                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                    {service.features.map((feature) => (
                                                        <li key={feature} className="flex items-start">
                                                            <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </div>
                                    </motion.div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}