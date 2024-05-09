export interface IssueT {
  id:            string;
  type:          string;
  attributes:    Attributes;
  relationships: Relationships;
}

export interface Attributes {
  classes:                  Class[];
  coordinates:              Coordinate[];
  created_at:               Date;
  effective_severity_level: string;
  ignored:                  boolean;
  key:                      string;
  problems:                 Problem[];
  risk:                     Risk;
  status:                   string;
  title:                    string;
  type:                     string;
  updated_at:               Date;
}

export interface Class {
  id:     string;
  source: string;
  type:   string;
}

export interface Coordinate {
  is_fixable_manually: boolean;
  is_fixable_snyk:     boolean;
  is_fixable_upstream: boolean;
  is_patchable:        boolean;
  is_pinnable:         boolean;
  is_upgradeable:      boolean;
  reachability:        string;
  representations:     Representation[];
}

export interface Representation {
  dependency: Dependency;
}

export interface Dependency {
  package_name:    string;
  package_version: string;
}

export interface Problem {
  id:         string;
  source:     string;
  type:       string;
  updated_at: Date;
  url?:       string;
}

export interface Risk {
  factors: any[];
  score:   Score;
}

export interface Score {
  model: string;
  value: number;
}

export interface Relationships {
  organization: Organization;
  scan_item:    Organization;
}

export interface Organization {
  data:  Data;
  links: Links;
}

export interface Data {
  id:   string;
  type: string;
}

export interface Links {
  related: string;
}
