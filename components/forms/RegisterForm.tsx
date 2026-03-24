"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { RegisterSchema, type RegisterInput } from "@/lib/validation/register";

type SubmitStatus = "idle" | "success" | "error";

export default function RegisterForm({ messages }: { messages?: any }) {
  const t = messages || {
    fullName: "Full name",
    namePlaceholder: "Enter your full name",
    mobileNumber: "Mobile number",
    phonePlaceholder: "Mobile number",
    yourEmail: "Your email",
    emailPlaceholder: "Enter your email",
    acceptTerms: "I hereby accept all the terms and conditions & privacy policy",
    button: "Register Now",
    registering: "Registering...",
    success: "✓ Registration successful! We'll be in touch.",
    error: "Something went wrong. Please try again."
  };

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [apiMessage, setApiMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { full_name: "", phone: "", email: "", acceptTerms: false },
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitStatus("idle");
    setApiMessage("");
    
    try {
      const response = await axios.post("/api/register", data);
      const result = response.data;

      // Handle cases where status is 200 but success/status is false
      if (result.success === false || result.status === false) {
        throw { response: { data: result } };
      }

      setSubmitStatus("success");
      setApiMessage(result.message || t.success);
    } catch (error: any) {
      setSubmitStatus("error");
      
      const result = error.response?.data || {};
      setApiMessage(result.message || t.error);

      if (result.errors) {
        Object.keys(result.errors).forEach((errorKey) => {
          // Map backend fields to frontend fields
          let formField: any = errorKey;
          // Robust mapping for name fields
          if (["first_name", "last_name", "full_name", "name"].includes(errorKey.toLowerCase())) {
            formField = "full_name";
          }
          
          const errorMessage = Array.isArray(result.errors[errorKey]) 
            ? result.errors[errorKey][0] 
            : result.errors[errorKey];

          setError(formField, {
            type: "manual",
            message: errorMessage,
          });
        });
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="lg:mt-6 mt-4">
      <div className="md:mb-6 mb-4">
        <label htmlFor="register-name" className="text-base/snug text-white font-normal sm:mb-2 mb-1 block">
          {t.fullName}
        </label>
        <div className="input-field">
          <input
            id="register-name"
            {...register("full_name")}
            type="text"
            placeholder={t.namePlaceholder}
            className="input-inner"
            aria-required="true"
            aria-describedby="register-name-error"
          />
          <span className="md:px-4 px-3">
            <img src="/assets/images/icon/profile-icon.svg" alt="" className="min-w-4 w-4" />
          </span>
        </div>
        {errors.full_name && (
          <p id="register-name-error" role="alert" className="text-red-300 text-xs mt-1">
            {errors.full_name.message}
          </p>
        )}
      </div>

      <div className="md:mb-6 mb-4">
        <label htmlFor="register-phone" className="text-base/snug text-white font-normal sm:mb-2 mb-1 block">
          {t.mobileNumber}
        </label>
        <div className="input-field">
          <input
            id="register-phone"
            {...register("phone")}
            type="tel"
            placeholder={t.phonePlaceholder}
            className="input-inner"
            aria-required="true"
            aria-describedby="register-phone-error"
          />
          <span className="md:px-4 px-3">
            <img src="/assets/images/icon/mobile-input-icon.svg" alt="" className="min-w-4 w-4" />
          </span>
        </div>
        {errors.phone && (
          <p id="register-phone-error" role="alert" className="text-red-300 text-xs mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="md:mb-6 mb-4">
        <label htmlFor="register-email" className="text-base/snug text-white font-normal sm:mb-2 mb-1 block">
          {t.yourEmail}
        </label>
        <div className="input-field">
          <input
            id="register-email"
            {...register("email")}
            type="email"
            placeholder={t.emailPlaceholder}
            className="input-inner"
            aria-required="true"
            aria-describedby="register-email-error"
          />
          <span className="md:px-4 px-3">
            <img src="/assets/images/icon/massage-icon.svg" alt="" className="min-w-4 w-4" />
          </span>
        </div>
        {errors.email && (
          <p id="register-email-error" role="alert" className="text-red-300 text-xs mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="md:mb-6 mb-4 flex items-center gap-1">
        <input
          type="checkbox"
          id="acceptAll"
          {...register("acceptTerms")}
          className="custom-checkbox appearance-none w-4 aspect-square rounded-full border border-white"
        />
        <label htmlFor="acceptAll" className="text-xs/snug font-medium text-white cursor-pointer">
          {t.acceptTerms}
        </label>
      </div>
      {errors.acceptTerms && (
        <p role="alert" className="text-red-300 text-xs -mt-4">
          {errors.acceptTerms.message}
        </p>
      )}

      <PrimaryButton type="submit" className={isSubmitting ? "opacity-70" : ""}>
        {isSubmitting ? t.registering : t.button}
      </PrimaryButton>

      {submitStatus === "success" && (
        <p role="alert" className="text-green-300 text-sm mt-3">
          {apiMessage}
        </p>
      )}
      {submitStatus === "error" && (
        <p role="alert" className="text-red-300 text-sm mt-3">
          {apiMessage}
        </p>
      )}
    </form>
  );
}
