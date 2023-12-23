import { EmbedData } from "discord.js";
import * as React from "react";

interface DiscordEmbedPreviewProps {
  embedData: EmbedData;
}

export function DiscordEmbedPreview({ embedData }: DiscordEmbedPreviewProps) {
  return (
    <div>
      <pre>{JSON.stringify(embedData, null, 2)}</pre>
    </div>
  );
}
