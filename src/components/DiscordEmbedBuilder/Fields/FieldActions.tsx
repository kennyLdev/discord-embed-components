import * as React from "react";

import { Dispatch, SetStateAction } from "react";
import { type EmbedData } from "discord.js";

import {
  XMarkIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";

interface DiscordEmbedBuilderFieldsFieldActionsProps {
  index: number;
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilderFieldsFieldActions({
  index,
  embedData,
  setEmbedData,
}: DiscordEmbedBuilderFieldsFieldActionsProps) {
  function deleteField(index: number) {
    setEmbedData((prev) => ({
      ...prev,
      fields: prev.fields?.filter((_, i) => i !== index),
    }));
  }

  function moveFieldUp(index: number) {
    if (index === 0) {
      return;
    }

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
    if (index === (embedData.fields?.length || 0) - 1) {
      return;
    }

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

  const actions = [
    {
      label: "Move Up",
      Icon: ArrowUpIcon,
      onClick: () => moveFieldUp(index),
    },
    {
      label: "Move Down",
      Icon: ArrowDownIcon,
      onClick: () => moveFieldDown(index),
    },
    {
      label: "Delete",
      Icon: XMarkIcon,
      onClick: () => deleteField(index),
    },
  ];

  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        {actions.map(({ onClick, label, Icon }, i) => (
          <div className="flex w-0 flex-1">
            <button
              onClick={() => onClick()}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white"
            >
              <Icon className="h-5 w-5 text-gray-200" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
