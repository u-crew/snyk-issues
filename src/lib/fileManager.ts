import { writeFileSync, readFileSync, utimesSync, openSync, closeSync, mkdirSync } from "fs";
import { homedir } from "os";
import { getSnykGroup } from "./env.js";

const generateDateSuffix = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}-${month}-${year}`;
};

const filePath = `${homedir}/.snyk-issues/group/${getSnykGroup()}/issues-${generateDateSuffix()}.json`;
const targetDir = `${homedir}/.snyk-issues/group/${getSnykGroup()}`;


const touch = () => {
  mkdirSync(targetDir, { recursive: true });
  const time = new Date();
  try {
    utimesSync(filePath, time, time);
  } catch (err) {
    closeSync(openSync(filePath, 'w'));
  }
}
// Ensure this is a snyc only write to create new file
// Ideal execution is once a day
// To-Do: Types
export const newFileContentWriter = (issues: any) => {
  // Ensure file exists with utimesSync
  touch();
  // Creating a JSON Issues Object store on filesystem
  const issuesObject = {
    issues: issues,
  };
  writeFileSync(filePath, JSON.stringify(issuesObject), 'utf8');
};

// Ensure this is a sync only write and push to issues array new issues fetched
// To-Do: Types
export const appendableContentWriter = (resp: any) => {
  // Read as UTF-8 string
  const fileData = readFileSync(filePath, 'utf8');
  // Parse to JSON
  const parsedFileData = JSON.parse(fileData);
  // Push new issues from API response to array
  parsedFileData.issues.push(resp.data);
  // Write to file as String and save newly fetched issues
  writeFileSync('issues.json', JSON.stringify(parsedFileData), 'utf8');
};