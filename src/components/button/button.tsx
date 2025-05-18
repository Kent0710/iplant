import type { PropFunction } from "@builder.io/qwik";
import { component$, Slot } from "@builder.io/qwik";

interface ButtonProps {
  onClick$?: PropFunction<() => void>;
  variant?: 'primary' | 'secondary' | 'dark';
  additionalClass? : string;
}

export const Button = component$(({ onClick$, variant = 'primary', additionalClass }: ButtonProps) => {
  const baseClasses = "px-8 py-2 rounded-full text-[#2E8E01] text-[#2E8E01] font-semibold";

  // Define variant classes object with const assertion for stricter typing
  const variantClasses = {
    primary: "bg-white",
    secondary: "bg-[#38B100] text-white",
    dark: "bg-[#1A1A1A] text-[#38B001]",
  } as const;

  return (
    <button
      onClick$={onClick$}
      class={`${baseClasses} ${additionalClass} ${variantClasses[variant]}`}
    >
      <Slot />
    </button>
  );
});
