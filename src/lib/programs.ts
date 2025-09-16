export type ImageType = {
  url: string;
  height?: number;
  width?: number;
};

export type ProgramsItem = {
  title: string;
  image?: ImageType;  // string → ImageTypeに修正

  title1?: string;
  detail1?: string;
  contents?: string;
  image1?: ImageType;   // string → ImageTypeに修正
  link1?: string;

  title2?: string;
  detail2?: string;
  image2?: ImageType;
  link2?: string;

  title3?: string;
  detail3?: string;
  image3?: ImageType;
  link3?: string;

  title4?: string;
  detail4?: string;
  image4?: ImageType;
  link4?: string;

  title5?: string;
  detail5?: string;
  image5?: ImageType;
  link5?: string;

  title6?: string;
  detail6?: string;
  image6?: ImageType;
  link6?: string;

  title7?: string;
  detail7?: string;
  image7?: ImageType;
  link7?: string;

  other?: string;
  id: string;
};

  