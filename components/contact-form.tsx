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
import Link from "next/link";

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
    if (!privacyConsent) {
      // Hoewel de 'required' prop dit meestal afvangt, is dit een extra controle.
      return;
    }
    setIsSubmitting(true);
    setResponseMessage("");

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
        setFormData({
          name: "",
          company: "",
          interestedServices: [],
          message: "",
        });
        setPrivacyConsent(false);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setResponseMessage(content.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">{content.title}</CardTitle>
        <CardDescription>{content.description}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{content.nameLabel}</Label>
            <Input
              id="name"
              placeholder={content.namePlaceholder}
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">{content.companyLabel}</Label>
            <Input
              id="company"
              placeholder={content.companyPlaceholder}
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>
          <div className="space-y-3">
            <Label>{content.servicesLabel}</Label>
            <div className="space-y-2">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.interestedServices.includes(service)}
                    onCheckedChange={() => handleServiceChange(service)}
                  />
                  <label
                    htmlFor={service}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{content.messageLabel}</Label>
            <Textarea
              id="message"
              placeholder={content.messagePlaceholder}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="privacy"
              checked={privacyConsent}
              onCheckedChange={(checked) =>
                setPrivacyConsent(checked as boolean)
              }
              required
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="privacy"
                className="text-sm text-muted-foreground"
              >
                {content.privacyLabel}{" "}
                <Link
                  href="/privacy-policy"
                  className="font-bold underline hover:text-primary"
                >
                  {content.privacyLinkText}
                </Link>
                .
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !privacyConsent}
          >
            {isSubmitting ? "Verzenden..." : content.submitButton}
          </Button>
          {responseMessage && (
            <p
              className={`mt-4 text-sm ${responseMessage.includes("succes") ? "text-green-600" : "text-red-600"}`}
            >
              {responseMessage}
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
