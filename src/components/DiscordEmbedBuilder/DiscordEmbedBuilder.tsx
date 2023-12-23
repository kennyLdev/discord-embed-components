import * as React from "react";
import { EmbedInput } from "./EmbedInput";
import { type EmbedData } from "discord.js";
import { Dispatch, SetStateAction } from "react";
import { colorHexToInt } from "../../utils/colorHexToInt";
import { colorIntToHex } from "../../utils/colorIntToHex";
import { DiscordEmbedBuilderMainInfo } from "./DiscordEmbedBuilderMainInfo";
import { DiscordEmbedBuilderFields } from "./DiscordEmbedBuilderFields";

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
