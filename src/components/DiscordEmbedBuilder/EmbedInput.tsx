import * as React from "react";

import { classNames } from "../../utils/classNames";

interface DiscordEmbedBuilderEmbedInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  setValue: (value: string) => void;
}

export function DiscordEmbedBuilderEmbedInput({
  id,
  label,
  type = "text",
  value,
  setValue,
}: DiscordEmbedBuilderEmbedInputProps) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-white"
      >
        {label}
      </label>

      <div className="mt-2">
        <input
          type={type}
          name={id}
          className={classNames(
            "block w-full rounded-md border-0 bg-white/5  text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6",
            type === "color" ? "p-1.5 h-9" : "py-1.5"
          )}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
