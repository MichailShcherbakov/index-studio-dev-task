export enum AdsViewEnum {
  GRID = "grid",
  LIST = "list",
}

export type AdImage = {
  id: string;
  url: string;
};

export type Ad = {
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
  about: string;
  createdAt: string;
  images: AdImage[];
};

export enum RequestStatusEnum {
  IDLE = "IDLE",
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export type AdsViewingSettings = {
  view: AdsViewEnum;
};

export type AdsState = {
  all: Ad[];
  page: number;
  pages: number;
  status: RequestStatusEnum;
  currentAdId: Ad["id"] | null;
  metadata: AdMetadataCollection;
  viewingSettings: AdsViewingSettings;
};

export type AdMetadata = { isLiked: boolean };
export type AdMetadataCollection = Record<Ad["id"], AdMetadata>;
