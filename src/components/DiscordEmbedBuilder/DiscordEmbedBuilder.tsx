import * as React from "react";

import { DiscordEmbedBuilderFields } from "./DiscordEmbedBuilderFields";
import { DiscordEmbedBuilderMainInfo } from "./DiscordEmbedBuilderMainInfo";
import { Dispatch, SetStateAction } from "react";
import { type EmbedData } from "discord.js";

interface DiscordEmbedBuilderProps {
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
  className?: string;
}

export function DiscordEmbedBuilder({
  embedData,
  setEmbedData,
  className,
}: DiscordEmbedBuilderProps) {
  return (
    <div className={className}>
      <div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Embed Builder</h2>

          <p className="mt-1 text-sm leading-6 text-gray-400">
            Use the form to choose how your embed will be displayed.
          </p>
        </div>

        <div className="mt-4">
          <DiscordEmbedBuilderMainInfo
            embedData={embedData}
            setEmbedData={setEmbedData}
          />
        </div>

        <div className="mt-4">
          <DiscordEmbedBuilderFields
            embedData={embedData}
            setEmbedData={setEmbedData}
          />
        </div>
      </div>
    </div>
  );
}
