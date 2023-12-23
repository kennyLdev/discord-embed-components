import * as React from "react";

import { colorHexToInt } from "../../utils/colorHexToInt";
import { colorIntToHex } from "../../utils/colorIntToHex";
import { Dispatch, SetStateAction } from "react";
import { EmbedInput } from "./EmbedInput";
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
        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
          id="author-url"
          label="Author URL"
          value={embedData.author?.url || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              author: {
                ...prev.author,
                url: value,
              },
            }));
          }}
        />

        <EmbedInput
          id="author-icon"
          label="Author Icon"
          value={embedData.author?.iconURL || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              author: {
                ...prev.author,
                iconURL: value,
              },
            }));
          }}
        />

        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
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

        <EmbedInput
          id="footer-icon-url"
          label="Footer Icon URL"
          value={embedData.footer?.iconURL || ""}
          setValue={(value) => {
            setEmbedData((prev) => ({
              ...prev,
              footer: {
                ...prev.footer,
                iconURL: value,
              },
            }));
          }}
        />
      </div>
    </div>
  );
}
