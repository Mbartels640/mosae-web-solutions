"use client";
import { useState, type FormEvent } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

interface ContactFormProps {
  content: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
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
  };
  services: string[];
}

interface FormErrors {
  name?: string;
  message?: string;
  privacy?: string;
}

export function ContactForm({ content, services }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    interestedServices: [] as string[],
    message: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | null>(
    null,
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!privacyConsent) {
      newErrors.privacy = "You must accept the privacy policy";
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm();
    setErrors(newErrors);
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const newServices = prev.interestedServices.includes(service)
        ? prev.interestedServices.filter((s) => s !== service)
        : [...prev.interestedServices, service];
      return { ...prev, interestedServices: newServices };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);
    setTouched({
      name: true,
      message: true,
      privacy: true,
    });

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");
    setResponseType(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, privacyConsent }),
      });

      if (response.ok) {
        setResponseMessage(content.successMessage);
        setResponseType("success");
        setFormData({
          name: "",
          company: "",
          interestedServices: [],
          message: "",
        });
        setPrivacyConsent(false);
        setTouched({});
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setResponseMessage(content.errorMessage);
      setResponseType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white via-white to-red-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-red-950/20">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full translate-y-12 -translate-x-12" />

        <CardHeader className="text-center relative z-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent dark:from-white dark:to-red-400">
              {content.title}
            </CardTitle>
            <CardDescription className="text-lg mt-3 text-gray-600 dark:text-gray-300">
              {content.description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 relative z-10">
            {/* Name Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label
                htmlFor="name"
                className="text-sm font-semibold flex items-center gap-2"
              >
                <User className="w-4 h-4 text-red-600" />
                {content.nameLabel}
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  placeholder={content.namePlaceholder}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onBlur={() => handleBlur("name")}
                  className={`transition-all duration-200 ${
                    errors.name && touched.name
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "focus:border-red-500 focus:ring-red-500/20"
                  }`}
                />
                <AnimatePresence>
                  {errors.name && touched.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-1 mt-1 text-sm text-red-600"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Company Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label
                htmlFor="company"
                className="text-sm font-semibold flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-red-600" />
                {content.companyLabel}
              </Label>
              <Input
                id="company"
                placeholder={content.companyPlaceholder}
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="focus:border-red-500 focus:ring-red-500/20 transition-all duration-200"
              />
            </motion.div>

            {/* Services Selection */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label className="text-sm font-semibold flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600" />
                {content.servicesLabel}
              </Label>
              <div className="grid gap-3 sm:grid-cols-1">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-colors duration-200 hover:bg-red-50/50 dark:hover:bg-red-950/20"
                  >
                    <Checkbox
                      id={service}
                      checked={formData.interestedServices.includes(service)}
                      onCheckedChange={() => handleServiceChange(service)}
                      className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-medium leading-none cursor-pointer flex-1"
                    >
                      {service}
                    </label>
                    {formData.interestedServices.includes(service) && (
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
                          className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        >
                          Selected
                        </Badge>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Label
                htmlFor="message"
                className="text-sm font-semibold flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-red-600" />
                {content.messageLabel}
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder={content.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onBlur={() => handleBlur("message")}
                  rows={4}
                  className={`transition-all duration-200 resize-none ${
                    errors.message && touched.message
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      : "focus:border-red-500 focus:ring-red-500/20"
                  }`}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {formData.message.length}/500
                </div>
                <AnimatePresence>
                  {errors.message && touched.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-1 mt-1 text-sm text-red-600"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Privacy Consent */}
            <motion.div
              className="flex items-start space-x-3 pt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Checkbox
                id="privacy"
                checked={privacyConsent}
                onCheckedChange={(checked) => {
                  setPrivacyConsent(checked as boolean);
                  setTouched((prev) => ({ ...prev, privacy: true }));
                }}
                className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 mt-1"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {content.privacyLabel}{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-bold underline hover:text-red-600 transition-colors duration-200"
                  >
                    {content.privacyLinkText}
                  </Link>
                  .
                </label>
                <AnimatePresence>
                  {errors.privacy && touched.privacy && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-1 text-sm text-red-600"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.privacy}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </CardContent>

          <CardFooter className="flex flex-col items-center space-y-4 relative z-10 mt-4">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={
                  isSubmitting || Object.keys(validateForm()).length > 0
                }
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
                      : "bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-200"
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
      </Card>
    </motion.div>
  );
}
