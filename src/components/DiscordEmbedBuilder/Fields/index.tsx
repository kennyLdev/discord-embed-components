import * as React from "react";

import { Dispatch, SetStateAction } from "react";
import { type EmbedData } from "discord.js";

import { DiscordEmbedBuilderEmbedInput } from "../EmbedInput";
import { DiscordEmbedBuilderFieldsFieldActions } from "./FieldActions";
import { DiscordEmbedBuilderFieldsInlineSwitch } from "./InlineSwitch";

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
                      <DiscordEmbedBuilderEmbedInput
                        id={`field-${i}-name`}
                        label="Name"
                        value={field.name}
                        setValue={(name) => {
                          setFieldInput(i, "name", name);
                        }}
                      />

                      <DiscordEmbedBuilderEmbedInput
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
                    <DiscordEmbedBuilderFieldsInlineSwitch
                      setEmbedData={setEmbedData}
                      index={i}
                      field={field}
                    />
                  </div>
                </div>

                <DiscordEmbedBuilderFieldsFieldActions
                  embedData={embedData}
                  setEmbedData={setEmbedData}
                  index={i}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 mt-2"
        onClick={() => {
          addField();
        }}
      >
        Add Field
      </button>
    </div>
  );
}
