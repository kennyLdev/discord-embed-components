import * as React from "react";

import { colorHexToInt } from "../../utils/colorHexToInt";
import { colorIntToHex } from "../../utils/colorIntToHex";
import { Dispatch, SetStateAction } from "react";
import { DiscordEmbedBuilderEmbedInput } from "./EmbedInput";
import { type EmbedData } from "discord.js";

interface DiscordEmbedBuilderMainInfoProps {
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilderMainInfo({
  embedData,
  setEmbedData,
}: DiscordEmbedBuilderMainInfoProps) {
  return (
    <div>
      <h3 className="text-xl">Main Information</h3>

      <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
        <DiscordEmbedBuilderEmbedInput
          id="author-name"
          label="Author Name"
          value={embedData.author?.name || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              author: {
                ...prev.author,
                name: value,
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="author-url"
          label="Author URL"
          value={embedData.author?.url || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              author: {
                ...prev.author,
                url: value,
                name: prev.author?.name || "",
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="author-icon"
          label="Author Icon"
          value={embedData.author?.iconURL || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              author: {
                ...prev.author,
                iconURL: value,
                name: prev.author?.name || "",
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="embed-title"
          label="Embed Title"
          value={embedData.title || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              title: value,
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="embed-description"
          label="Embed Description"
          value={embedData.description || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              description: value,
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="embed-url"
          label="Embed URL"
          value={embedData.url || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              url: value,
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="image-url"
          label="Image URL"
          value={embedData.image?.url || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              image: {
                ...prev.image,
                url: value,
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="thumbnail-url"
          label="Thumbnail URL"
          value={embedData.thumbnail?.url || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              thumbnail: {
                ...prev.thumbnail,
                url: value,
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="footer"
          label="Footer"
          value={embedData.footer?.text || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              footer: {
                ...prev.footer,
                text: value,
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="footer-icon-url"
          label="Footer Icon URL"
          value={embedData.footer?.iconURL || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              footer: {
                ...prev.footer,
                iconURL: value,
                text: prev.footer?.text || "",
              },
            }));
          }}
        />

        <DiscordEmbedBuilderEmbedInput
          id="embed-color"
          label="Embed Color"
          type="color"
          value={colorIntToHex(embedData.color || 0)}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              color: colorHexToInt(value),
            }));
          }}
        />
      </div>
    </div>
  );
}
