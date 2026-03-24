"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { SubscribeSchema, type SubscribeInput } from "@/lib/validation/subscribe";

type SubmitStatus = "idle" | "success" | "error";

export default function SubscribeForm({ messages }: { messages?: any }) {
  const t = messages || {
    placeholder: "Enter your email",
    button: "Subscribe Now",
    subscribing: "Subscribing...",
    success: "✓ You're subscribed!",
    error: "Something went wrong. Please try again."
  };

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [apiMessage, setApiMessage] = useState<string>("");

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
    setApiMessage("");
    try {
      const response = await axios.post("/api/subscribe", data);
      const result = response.data;

      if (result.success === false || result.status === false) {
        throw { response: { data: result } };
      }

      setSubmitStatus("success");
      setApiMessage(result.message || t.success);
    } catch (error: any) {
      setSubmitStatus("error");
      const result = error.response?.data || {};
      setApiMessage(result.message || t.error);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex rounded-full border border-[#B28CC8] bg-white lg:my-6 my-4 items-center overflow-hidden">
        <input
          id="subscribe-email"
          type="email"
          {...register("email")}
          placeholder={t.placeholder}
          className="input-inner"
          aria-required="true"
          aria-describedby="subscribe-error"
        />
        <span className="md:px-4 px-3">
          <img src="/assets/images/icon/massage-icon.svg" alt="" className="min-w-4 w-4" />
        </span>
      </div>

      {submitStatus === "success" && (
        <p role="alert" className="text-green-700 text-sm mt-2">
          {apiMessage}
        </p>
      )}
      {submitStatus === "error" && (
        <p role="alert" className="text-red-500 text-sm mt-2">
          {apiMessage}
        </p>
      )}

      {errors.email && (
        <p id="subscribe-error" role="alert" className="text-red-500 text-xs mb-2">
          {errors.email.message}
        </p>
      )}

      <PrimaryButton type="submit" className={isSubmitting ? "opacity-70" : ""}>
        {isSubmitting ? t.subscribing : t.button}
      </PrimaryButton>


    </form>
  );
}
