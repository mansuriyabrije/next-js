"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { SubscribeSchema, type SubscribeInput } from "@/lib/validation/subscribe";

type SubmitStatus = "idle" | "success" | "error";

export default function SubscribeForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitStatus("idle");
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus("success");
      return;
    }
    setSubmitStatus("error");
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex rounded-full border border-[#B28CC8] bg-white lg:my-6 my-4 items-center overflow-hidden">
        <input
          id="subscribe-email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="input-inner"
          aria-required="true"
          aria-describedby="subscribe-error"
        />
        <span className="md:px-4 px-3">
          <img src="/assets/images/icon/massage-icon.svg" alt="" className="min-w-4 w-4" />
        </span>
      </div>

      {errors.email && (
        <p id="subscribe-error" role="alert" className="text-red-500 text-xs mb-2">
          {errors.email.message}
        </p>
      )}

      <PrimaryButton type="submit" className={isSubmitting ? "opacity-70" : ""}>
        {isSubmitting ? "Subscribing..." : "Subscribe Now"}
      </PrimaryButton>

      {submitStatus === "success" && (
        <p role="alert" className="text-green-700 text-sm mt-2">
          ✓ You&apos;re subscribed!
        </p>
      )}
      {submitStatus === "error" && (
        <p role="alert" className="text-red-500 text-sm mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
