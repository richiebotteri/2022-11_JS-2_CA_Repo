import { scrollToViewPost } from "../../display/scroll-to-view-post.mjs";
import { changeToHtmlPost } from "../../html-data/post/html-post-content.mjs";

import { changeAvatarData } from "./change-avatar-data.mjs";
import { changeToHtmlComments } from "./change-comments-data.mjs";
import { changeCreatedFormat } from "./date-changes/change-created-format.mjs";
import { changeUpdateFormat } from "./date-changes/change-update-format.mjs";
import { onlyShowRealUpdates } from "./date-changes/only-show-real-updates.mjs";
import { changeMediaData } from "./media-changes/change-media-data.mjs";
import { changeToHtmlTag } from "./tag-changes/change-tag-to-html.mjs";
import { changeTagsToStringChain } from "./tag-changes/change-tags-to-string-chain.mjs";

import { changeToTagsWithContent } from "./tag-changes/change-to-tags-with-content.mjs";

export function changePostVariables(post, responseOk) {
   if (responseOk) {
      const { title, body, tags, media, created, id, updated, author, comments, reactions, _count } = post;
      const authorName = author.name.toLowerCase();
      const authorAvatar = author.avatar;
      // Manipulate data For display
      const tagsWithContent = changeToTagsWithContent(tags);
      const tagStringChain = changeTagsToStringChain(tagsWithContent);
      const htmlTags = changeToHtmlTag(tagsWithContent);

      const htmlComments = changeToHtmlComments(comments);
      const realDateUpdates = onlyShowRealUpdates(created, updated);
      const newDateCreated = changeCreatedFormat(created);
      const newDateUpdated = changeUpdateFormat(realDateUpdates);
      const newMedia = changeMediaData(media);
      const newAuthorAvatar = changeAvatarData(authorAvatar, authorName);

      const updatedPostVariables = {
         id: id,
         title: title,
         body: body,
         tags: tagsWithContent,
         stringTags: tagStringChain,
         htmlTags: htmlTags,
         dateCreated: newDateCreated,
         dateUpdated: newDateUpdated,
         media: newMedia,
         author: authorName,
         avatar: newAuthorAvatar,
         comments: htmlComments,
         reactions: reactions,
         count: _count,
      };

      scrollToViewPost(id);

      changeToHtmlPost(updatedPostVariables);
   }
}
