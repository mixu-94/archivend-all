"use client";

import { useState, useId } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  datenschutz: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
  datenschutz?: string;
}

const INTEREST_OPTIONS = [
  { value: "Immobilien", label: "Immobilien" },
  { value: "Bauprojekte", label: "Bauprojekte" },
  { value: "Gutachten & Exposés", label: "Gutachten & Exposés" },
  { value: "Air Fly", label: "Air Fly" },
  { value: "Sonstiges", label: "Sonstiges" },
];

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  datenschutz: false,
};

export function ContactFormSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const id = useId();

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRe.test(form.email.trim()))
      e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!form.interest)
      e.interest = "Bitte wählen Sie Ihr Interessensgebiet.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Bitte beschreiben Sie Ihr Anliegen (mindestens 10 Zeichen).";
    if (!form.datenschutz)
      e.datenschutz = "Bitte bestätigen Sie die Datenschutzerklärung.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setServerMessage(data.message ?? "Ihre Nachricht wurde erfolgreich gesendet.");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
        setServerMessage(data.error ?? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Die Verbindung ist unterbrochen. Bitte prüfen Sie Ihre Internetverbindung.");
    }
  }

  const setField =
    (field: keyof Pick<FormData, "name" | "email" | "phone" | "message">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field as keyof FormErrors])
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/15 mb-6">
          <CheckCircle2 className="h-8 w-8 text-brand-accent" />
        </div>
        <h3 className="text-2xl font-bold text-brand-text mb-3">Vielen Dank!</h3>
        <p className="text-brand-text-muted mb-2">{serverMessage}</p>
        <p className="text-sm text-brand-text-muted mb-8">
          Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen zurück.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Weitere Nachricht senden
        </Button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <div>
      {/* Section header */}
      <FadeIn>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block h-px w-8 bg-brand-accent" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-accent">
              Kontaktformular
            </span>
            <span className="block h-px w-8 bg-brand-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-3 tracking-tight">
            Schreiben Sie uns
          </h2>
          <p className="text-brand-text-muted text-lg">
            Kostenlos und unverbindlich — wir antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </FadeIn>

      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 mb-6">
          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">{serverMessage}</p>
        </div>
      )}

      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor={`${id}-name`}>
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id={`${id}-name`}
                type="text"
                autoComplete="name"
                placeholder="Max Mustermann"
                value={form.name}
                onChange={setField("name")}
                disabled={isLoading}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${id}-name-err` : undefined}
                className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
              />
              {errors.name && (
                <p id={`${id}-name-err`} className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-email`}>
                E-Mail <span className="text-destructive">*</span>
              </Label>
              <Input
                id={`${id}-email`}
                type="email"
                autoComplete="email"
                placeholder="max@beispiel.de"
                value={form.email}
                onChange={setField("email")}
                disabled={isLoading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${id}-email-err` : undefined}
                className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
              />
              {errors.email && (
                <p id={`${id}-email-err`} className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Row: Phone + Interest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor={`${id}-phone`}>Telefon (optional)</Label>
              <Input
                id={`${id}-phone`}
                type="tel"
                autoComplete="tel"
                placeholder="+49 7951 472 14 29"
                value={form.phone}
                onChange={setField("phone")}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${id}-interest`}>
                Interessensgebiet <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.interest}
                onValueChange={(val) => {
                  setForm((prev) => ({ ...prev, interest: val }));
                  if (errors.interest) setErrors((prev) => ({ ...prev, interest: undefined }));
                }}
                disabled={isLoading}
              >
                <SelectTrigger
                  id={`${id}-interest`}
                  aria-invalid={!!errors.interest}
                  className={cn(errors.interest && "border-destructive")}
                >
                  <SelectValue placeholder="Bitte wählen …" />
                </SelectTrigger>
                <SelectContent>
                  {INTEREST_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.interest && (
                <p className="text-xs text-destructive">{errors.interest}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor={`${id}-message`}>
              Ihre Nachricht <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id={`${id}-message`}
              rows={5}
              placeholder="Beschreiben Sie Ihr Anliegen …"
              value={form.message}
              onChange={setField("message")}
              disabled={isLoading}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? `${id}-message-err` : undefined}
              className={cn(
                "resize-y min-h-[120px]",
                errors.message && "border-destructive focus-visible:ring-destructive"
              )}
            />
            {errors.message && (
              <p id={`${id}-message-err`} className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          {/* Datenschutz */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <input
                id={`${id}-datenschutz`}
                type="checkbox"
                checked={form.datenschutz}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, datenschutz: e.target.checked }));
                  if (errors.datenschutz) setErrors((prev) => ({ ...prev, datenschutz: undefined }));
                }}
                disabled={isLoading}
                className="mt-0.5 h-4 w-4 rounded border-border accent-brand-primary cursor-pointer"
                aria-invalid={!!errors.datenschutz}
              />
              <Label htmlFor={`${id}-datenschutz`} className="text-sm text-brand-text-muted leading-relaxed cursor-pointer font-normal">
                Ich habe die{" "}
                <a href="/datenschutz" className="underline underline-offset-2 hover:text-brand-primary transition-colors">
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{" "}
                <span className="text-destructive">*</span>
              </Label>
            </div>
            {errors.datenschutz && (
              <p className="text-xs text-destructive pl-7">{errors.datenschutz}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-light text-white font-semibold px-8 py-3 h-auto"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet …
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Nachricht senden
              </>
            )}
          </Button>
          <p className="text-xs text-brand-text-muted">
            * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
          </p>
        </form>
      </FadeIn>
    </div>
  );
}
