"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  Send,
  Loader2,
  Mail,
  Building,
  MessageSquare,
  User,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { useRecaptcha } from "@/hooks/use-recaptcha";
import { useRecaptchaContext } from "@/components/recaptcha-provider";

interface ContactFormProps {
  content: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    servicesLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyLabel: string;
    privacyLinkText: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
    recaptchaError: string;
  };
  services: string[];
}

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(100, "Company must be less than 100 characters"),
  interestedServices: z.array(z.string()).optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "You must accept the privacy policy"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm({ content, services }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | null>(
    null,
  );
  const { lang } = useLanguage();
  const { siteKey } = useRecaptchaContext();
  const { isLoaded: recaptchaLoaded, executeRecaptcha } = useRecaptcha({
    siteKey,
    action: "contact_form",
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      interestedServices: [],
      message: "",
      privacyConsent: false,
    },
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    const currentServices = form.getValues("interestedServices") || [];
    if (checked) {
      form.setValue("interestedServices", [...currentServices, service]);
    } else {
      form.setValue(
        "interestedServices",
        currentServices.filter((s) => s !== service),
      );
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setResponseMessage("");
    setResponseType(null);
    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha();
      if (!recaptchaToken) {
        setResponseMessage(content.recaptchaError);
        setResponseType("error");
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "language-input": lang,
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });
      if (response.ok) {
        setResponseMessage(content.successMessage);
        setResponseType("success");
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResponseMessage(content.errorMessage);
      setResponseType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedServices = form.watch("interestedServices") || [];
  const watchedMessage = form.watch("message") || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-mosae-white via-mosae-white to-mosae-orange/10 dark:from-mosae-arsenic dark:via-mosae-arsenic dark:to-mosae-orange/20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mosae-orange/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-mosae-orange/5 to-transparent rounded-full translate-y-12 -translate-x-12" />
        <CardHeader className="text-center relative z-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-mosae-black to-mosae-orange bg-clip-text text-transparent dark:from-mosae-white dark:to-mosae-orange">
              {content.title}
            </CardTitle>
            <CardDescription className="text-lg mt-3 text-mosae-graphite dark:text-mosae-steel">
              {content.description}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold flex items-center gap-2">
                        <User className="w-4 h-4 text-mosae-orange" />
                        {content.nameLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={content.namePlaceholder}
                          className="dark:border-border focus:border-mosae-orange focus:ring-mosae-orange/20 transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-mosae-orange" />
                        {content.emailLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={content.emailPlaceholder}
                          className="dark:border-border focus:border-mosae-orange focus:ring-mosae-orange/20 transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold flex items-center gap-2">
                        <Building className="w-4 h-4 text-mosae-orange" />
                        {content.companyLabel}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={content.companyPlaceholder}
                          className="dark:border-border focus:border-mosae-orange focus:ring-mosae-orange/20 transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FormField
                  control={form.control}
                  name="interestedServices"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-mosae-orange" />
                        {content.servicesLabel}
                      </FormLabel>
                      <div className="grid gap-3 sm:grid-cols-1">
                        {services.map((service, index) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg border border-mosae-steel dark:border-mosae-steel hover:border-mosae-orange dark:hover:border-mosae-orange transition-colors duration-200 hover:bg-mosae-orange/5 dark:hover:bg-mosae-orange/10"
                          >
                            <FormField
                              control={form.control}
                              name="interestedServices"
                              render={() => (
                                <FormItem className="flex items-center space-x-3 space-y-0 flex-1">
                                  <FormControl>
                                    <Checkbox
                                      checked={watchedServices.includes(
                                        service,
                                      )}
                                      onCheckedChange={(checked) =>
                                        handleServiceChange(
                                          service,
                                          checked as boolean,
                                        )
                                      }
                                      className="data-[state=checked]:bg-mosae-orange data-[state=checked]:border-mosae-orange"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium leading-none cursor-pointer flex-1">
                                    {service}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                            {watchedServices.includes(service) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 30,
                                }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="bg-mosae-orange/10 text-mosae-orange dark:bg-mosae-orange/20 dark:text-mosae-orange"
                                >
                                  Selected
                                </Badge>
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-mosae-orange" />
                        {content.messageLabel}
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea
                            placeholder={content.messagePlaceholder}
                            rows={4}
                            className="dark:border-border focus:border-mosae-orange focus:ring-mosae-orange/20 transition-all duration-200 resize-none"
                            {...field}
                          />
                          <div className="absolute bottom-3 right-3 text-xs text-mosae-space">
                            {watchedMessage.length}/500
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FormField
                  control={form.control}
                  name="privacyConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-mosae-orange data-[state=checked]:border-mosae-orange mt-1 dark:border-mosae-steel"
                        />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel className="text-sm font-normal text-muted-foreground">
                          {content.privacyLabel}
                          <Link
                            href="/privacy-policy"
                            className="font-bold underline hover:text-mosae-orange transition-colors duration-200"
                          >
                            {content.privacyLinkText}
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-center gap-2 text-xs text-mosae-space"
              >
                <Shield className="w-3 h-3" />
                {recaptchaLoaded ? (
                  <span>Protected by reCAPTCHA</span>
                ) : (
                  <span>Loading security verification...</span>
                )}
              </motion.div>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4 relative z-10 mt-4">
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-mosae-orange to-mosae-red hover:from-mosae-red hover:to-red-800 text-mosae-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting || !recaptchaLoaded}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        {content.submitButton}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
              <AnimatePresence>
                {responseMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className={`flex items-center gap-2 p-4 rounded-lg border w-full ${
                      responseType === "success"
                        ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-800 dark:text-green-200"
                        : "bg-mosae-red/10 border-mosae-red/20 text-mosae-red dark:bg-mosae-red/20 dark:border-mosae-red/30 dark:text-mosae-red"
                    }`}
                  >
                    {responseType === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{responseMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </motion.div>
  );
}
