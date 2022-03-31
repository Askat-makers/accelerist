export interface IUser {
  accessToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: null | string;
    isReceivingNotifications: boolean;
    avatarKey: null | string;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
  };
}

export interface ICandidateUser {
  email: string;
  password: string;
}

export interface INavItem {
  url: string;
  title: string;
}

export interface ICompany {
  id: string;
  zoomInfoId: null | string;
  name: string;
  logo: string;
  ticker: null | string;
  parentCompany: null | string;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent: null | string;
  productsBrandDescription: null | string;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle: null | string;
  socialMediaUrls: null | string;
  competitors: null | string;
  subUnitIndustries: null | string;
  primaryIndustry: string[];
  industries: null | string;
  revenue: string;
  employeeCount: number;
  annualContributions: null | string;
  cashContributions: null | string;
  inKindContributions: null | string;
  employeeContributions: null | string;
  parentId: string;
  parentName: null | string;
  type: null | string;
  sdgGoals: [];
  genders: null | string;
  income: null | string;
  age: null | string;
  ethnicity: null | string;
  nonprofit: null | string;
  purchase: null | string;
  affiliation: null | string;
  brands: null | string;
  interests: null | string;
  typesOfInvestment: null | string;
  errorLoadZoomInfo: null | string;
  charitablePartners: [];
  statusZoomInfo: string;
  loadZoomInfoDate: null | string;
  errorLoadZoomInfoDate: null | string;
  partnershipLink: null | string;
  employeeEngagementOpportunities: true;
  similarCompanies: string[];
  favoriteCompanies: [
    {
      id: string;
      companyId: string;
      userId: string;
    }
  ];
  score: number;
  like: boolean;
  crsFocus: [];
}

export interface IGetCompaniesResponse {
  items: ICompany[];
  meta: {
    current: string;
    itemCount: number;
    itemsPerPage: string;
    totalItems: 2054;
    totalPages: 206;
  };
}

export interface IFilter {
  page: string;
  q: string;
  industries: string[];
}

export interface IGetCompanyResponse {
  id: string;
  zoomInfoId: null | string;
  name: string;
  logo: null | string;
  ticker: null | string;
  parentCompany: null | string;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent: null;
  productsBrandDescription: null | string;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle: null;
  socialMediaUrls: null;
  competitors: null;
  subUnitIndustries: null;
  primaryIndustry: string[];
  industries: null | string[];
  revenue: string;
  employeeCount: number;
  annualContributions: null | string[];
  cashContributions: null | string[];
  inKindContributions: null | string[];
  employeeContributions: null | string[];
  parentId: string;
  parentName: null | string;
  type: null | string;
  sdgGoals: [];
  genders: null | string;
  income: null | string;
  age: null | number;
  ethnicity: null | string;
  nonprofit: null | string;
  purchase: null | string;
  affiliation: null | string;
  brands: null | string[];
  interests: null | string[];
  typesOfInvestment: null | string[];
  errorLoadZoomInfo: null;
  charitablePartners: [];
  statusZoomInfo: string;
  loadZoomInfoDate: null;
  errorLoadZoomInfoDate: null;
  partnershipLink: null;
  employeeEngagementOpportunities: true;
  similarCompanies: string[];
  contacts: string[];
  crsFocus: string[];
  favoriteCompanies: { id: string; companyId: string; userId: string }[];
  like: boolean;
}
