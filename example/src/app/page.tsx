"use client";

import {
  DiscordEmbedBuilder,
  DiscordEmbedPreview,
  type EmbedData,
} from "discord-embed-components";

import { useState } from "react";

export default function Home() {
  const [embedData, setEmbedData] = useState<EmbedData>({});
  const [showRawEmbed, setShowRawEmbed] = useState(false);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="text-2xl my-8 text-center">
        Discord Embed Components Test
      </h1>

      <div className="mb-2">
        <DiscordEmbedBuilder
          className="p-4 bg-gray-800 text-white sm:rounded-md"
          embedData={embedData}
          setEmbedData={setEmbedData}
        />
      </div>

      <div className="mb-2">
        <DiscordEmbedPreview embedData={embedData} />
      </div>

      <div className="mb-2">
        <input
          type="checkbox"
          className="mr-2"
          onChange={(e) => setShowRawEmbed(e.target.checked)}
        />
        <span>View Raw Embed</span>
      </div>

      {showRawEmbed && (
        <div className="mb-2">
          <div className="p-4 bg-gray-800 text-white sm:rounded-md">
            <pre>{JSON.stringify(embedData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
