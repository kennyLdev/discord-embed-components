import { EmbedData } from "discord.js";
import * as React from "react";

import {
  DiscordMessage,
  DiscordMessages,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordEmbed,
} from "@discord-components/react";
import "@discord-components/react/dist/style.css";
import { colorIntToHex } from "../../utils/colorIntToHex";

interface DiscordEmbedPreviewProps {
  embedData: EmbedData;
}

export function DiscordEmbedPreview({ embedData }: DiscordEmbedPreviewProps) {
  return (
    <div>
      <DiscordMessages>
        <DiscordMessage author={embedData.author?.name} bot>
          <DiscordEmbed
            borderColor={colorIntToHex(embedData.color || 0)}
            authorName={embedData.author?.name}
            authorUrl={embedData.author?.url}
            authorIcon={embedData.author?.iconURL}
            embedTitle={embedData.title}
            url={embedData.description}
            thumbnail={embedData.thumbnail?.url}
            footerIcon={embedData.footer?.iconURL}
          >
            {embedData.fields && embedData.fields.length > 0 && (
              <DiscordEmbedFields>
                {embedData.fields.map((field) => (
                  <DiscordEmbedField
                    fieldTitle={field.name}
                    inline={field.inline}
                  >
                    {field.value}
                  </DiscordEmbedField>
                ))}
              </DiscordEmbedFields>
            )}

            {embedData.description && (
              <div slot="description">{embedData.description}</div>
            )}

            {embedData.footer && (
              <div slot="footer">{embedData.footer.text}</div>
            )}
          </DiscordEmbed>
        </DiscordMessage>
      </DiscordMessages>
    </div>
  );
}
