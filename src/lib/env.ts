import dotenv from 'dotenv';
dotenv.config();

export const getSnykToken = () => {
  return `Token ${process.env.SNYK_TOKEN}`;
};

export const getSnykApiUrl = (): string => {
  return process.env.SNYK_API_URL ? process.env.SNYK_API_URL : 'https://api.snyk.io/rest';
};

// Using a static default version for development
export const getSnykApiVersion = (): string => {
  return process.env.SNYK_API_VERSION ? process.env.SNYK_API_VERSION : '2024-04-29';
};

export const getSnykGroup = (): string => {
  return process.env.SNYK_GROUP ? process.env.SNYK_GROUP : '';
};


export const getSnykOrg = (): string => {
  return process.env.SNYK_ORG ? process.env.SNYK_ORG : '';
};

export const getSnykProject = (): string => {
  return process.env.SNYK_PROJECT ? process.env.SNYK_PROJECT : '';
};

export const getSnykProjectKey = (): string => {
  return process.env.SNYK_PROJECT_KEY ? process.env.SNYK_PROJECT_KEY: 'prod';
}; 

export const getSnykProjectType = (): string => {
  return process.env.SNYK_PROJECT_TYPE ? process.env.SNYK_PROJECT_TYPE : 'npm';
};

export default getSnykToken;