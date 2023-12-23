import * as React from "react";
import { EmbedInput } from "./EmbedInput";
import { type EmbedData } from "discord.js";
import { Dispatch, SetStateAction } from "react";
import { colorHexToInt } from "../../utils/colorHexToInt";
import { colorIntToHex } from "../../utils/colorIntToHex";

interface DiscordEmbedBuilderProps {
  embedData: EmbedData;
  setEmbedData: Dispatch<SetStateAction<EmbedData>>;
}

export function DiscordEmbedBuilder({
  embedData,
  setEmbedData,
}: DiscordEmbedBuilderProps) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <form>
        <div>
          <div className="pb-4">
            <h2 className="text-2xl font-semibold text-white">Embed Builder</h2>

            <p className="mt-1 text-sm leading-6 text-gray-400">
              Use the form to choose how your embed will be displayed.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Main Information</h3>
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
        </div>
      </form>
    </div>
  );
}
