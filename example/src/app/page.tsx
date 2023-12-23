"use client";

import {
  DiscordEmbedBuilder,
  DiscordEmbedPreview,
  type EmbedData,
} from "discord-embed-components";

import { useState } from "react";

export default function Home() {
  const [embedData, setEmbedData] = useState<EmbedData>({});

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="text-2xl mb-2 text-center">
        Discord Embed Components Test
      </h1>

      <div className="mb-2">
        <DiscordEmbedBuilder
          embedData={embedData}
          setEmbedData={setEmbedData}
        />
      </div>

      <div className="mb-2">
        <DiscordEmbedPreview embedData={embedData} />
      </div>
    </div>
  );
}
