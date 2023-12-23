import * as React from "react";

import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { type APIEmbedField, type EmbedData } from "discord.js";

import { classNames } from "../../../utils/classNames";

interface DiscordEmbedBuilderFieldsInlineSwitchProps {
  field: APIEmbedField;
  index: number;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilderFieldsInlineSwitch({
  field,
  index,
  setEmbedData,
}: DiscordEmbedBuilderFieldsInlineSwitchProps) {
  function toggleFieldInline(index: number) {
    setEmbedData((prev) => ({
      ...prev,
      fields: prev.fields?.map((field, i) => {
        if (i === index) {
          return {
            ...field,
            inline: !field.inline,
          };
        }

        return field;
      }),
    }));
  }

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={field.inline}
        onChange={() => toggleFieldInline(index)}
        className={classNames(
          field.inline ? "bg-gray-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray- focus:ring-offset-2"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            field.inline ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>

      <Switch.Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-white">Inline</span>{" "}
      </Switch.Label>
    </Switch.Group>
  );
}
