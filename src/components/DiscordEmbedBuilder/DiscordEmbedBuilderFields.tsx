import * as React from "react";

import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { type EmbedData } from "discord.js";

import {
  XMarkIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import { EmbedInput } from "./EmbedInput";
import { classNames } from "../../utils/classNames";

interface DiscordEmbedBuilderFieldsProps {
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilderFields({
  embedData,
  setEmbedData,
}: DiscordEmbedBuilderFieldsProps) {
  function addField() {
    setEmbedData((prev) => ({
      ...prev,
      fields: [
        ...(prev.fields || []),
        {
          name: "",
          value: "",
        },
      ],
    }));
  }

  function deleteField(index: number) {
    setEmbedData((prev) => ({
      ...prev,
      fields: prev.fields?.filter((_, i) => i !== index),
    }));
  }

  function moveFieldUp(index: number) {
    if (index === 0) return;

    setEmbedData((prev) => {
      const fields = prev.fields || [];

      const newFields = [...fields];

      const temp = newFields[index - 1];

      newFields[index - 1] = newFields[index];
      newFields[index] = temp;

      return {
        ...prev,
        fields: newFields,
      };
    });
  }

  function moveFieldDown(index: number) {
    if (index === (embedData.fields?.length || 0) - 1) return;

    setEmbedData((prev) => {
      const fields = prev.fields || [];

      const newFields = [...fields];

      const temp = newFields[index + 1];

      newFields[index + 1] = newFields[index];
      newFields[index] = temp;

      return {
        ...prev,
        fields: newFields,
      };
    });
  }

  function setFieldInput(index: number, key: string, value: string) {
    setEmbedData((prev) => ({
      ...prev,
      fields: prev.fields?.map((field, i) => {
        if (i === index) {
          return {
            ...field,
            [key]: value,
          };
        }

        return field;
      }),
    }));
  }

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
    <div>
      {embedData.fields && embedData.fields.length > 0 && (
        <div>
          <h3 className="text-xl">
            Fields
            <span className="ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {embedData.fields.length}/25
            </span>
          </h3>

          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4"
          >
            {embedData.fields.map((field, i) => (
              <li
                key={i}
                className="col-span-1 divide-y divide-gray-200 rounded-lg border-white/10 border bg-gray-900"
              >
                <div>
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex items-center space-x-3">
                      <EmbedInput
                        id={`field-${i}-name`}
                        label="Name"
                        value={field.name}
                        setValue={(name) => {
                          setFieldInput(i, "name", name);
                        }}
                      />

                      <EmbedInput
                        id={`field-${i}-value`}
                        label="Value"
                        value={field.value}
                        setValue={(value) => {
                          setFieldInput(i, "value", value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <Switch.Group as="div" className="flex items-center">
                      <Switch
                        checked={field.inline}
                        onChange={() => toggleFieldInline(i)}
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
                  </div>
                </div>

                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <button
                        onClick={(e) => deleteField(i)}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-white"
                      >
                        <XMarkIcon
                          className="h-5 w-5 text-gray-200"
                          aria-hidden="true"
                        />
                        Delete
                      </button>
                    </div>

                    <div className="-ml-px flex w-0 flex-1">
                      <button
                        onClick={(e) => moveFieldUp(i)}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white"
                      >
                        <ArrowUpIcon
                          className="h-5 w-5 text-gray-200"
                          aria-hidden="true"
                        />
                        Move Up
                      </button>
                    </div>

                    <div className="-ml-px flex w-0 flex-1">
                      <button
                        onClick={(e) => moveFieldDown(i)}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white"
                      >
                        <ArrowDownIcon
                          className="h-5 w-5 text-gray-200"
                          aria-hidden="true"
                        />
                        Move Down
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 mt-2"
        onClick={(e) => {
          addField();
        }}
      >
        Add Field
      </button>
    </div>
  );
}
