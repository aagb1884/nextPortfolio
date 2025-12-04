import { createImageUrlBuilder } from "@sanity/image-url/signed";
import { SanityImageSource } from "@sanity/image-url/signed";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
