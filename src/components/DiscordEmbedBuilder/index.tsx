import * as React from "react";

import { DiscordEmbedBuilderFields } from "./Fields";
import { DiscordEmbedBuilderMainInfo } from "./MainInfo";
import { Dispatch, SetStateAction } from "react";
import { type EmbedData } from "discord.js";

interface DiscordEmbedBuilderProps {
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilder({
  embedData,
  setEmbedData,
}: DiscordEmbedBuilderProps) {
  return (
    <>
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
    </>
  );
}
