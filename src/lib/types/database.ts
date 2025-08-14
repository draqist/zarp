export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  avatar_url?: string;
  linkedin_profile?: string;
  resume_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Sector {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category?: string;
  created_at: string;
}

export interface UserSkill {
  id: string;
  user_id: string;
  skill_id: string;
  proficiency_level: "beginner" | "intermediate" | "advanced" | "expert";
  years_experience?: number;
  created_at: string;
}

export interface JobPost {
  id: string;
  title: string;
  company: string;
  description?: string;
  location?: string;
  salary_min?: number;
  salary_max?: number;
  salary_currency: string;
  job_type?: "full-time" | "part-time" | "contract" | "internship";
  remote_type?: "remote" | "hybrid" | "on-site";
  experience_level?: "entry" | "mid" | "senior" | "executive";
  url?: string;
  source: string;
  source_id?: string;
  sector_id?: string;
  skills?: string[];
  posted_date?: string;
  expires_date?: string;
  created_at: string;
  updated_at: string;
}
export interface JobSearchResponse {
  data: JobPost[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
export interface Application {
  id: string;
  user_id: string;
  job_post_id: string;
  status:
    | "interested"
    | "applied"
    | "interviewing"
    | "offered"
    | "rejected"
    | "withdrawn";
  applied_date: string;
  cover_letter?: string;
  notes?: string;
  resume_version?: string;
  salary_expectation?: number;
  created_at: string;
  updated_at: string;
}

export interface Interview {
  id: string;
  application_id: string;
  scheduled_date: string;
  interview_type?: "phone" | "video" | "on-site" | "technical";
  interviewer?: string;
  notes?: string;
  status: "scheduled" | "completed" | "cancelled" | "rescheduled";
  feedback?: string;
  created_at: string;
  updated_at: string;
}

export interface CoverLetterTemplate {
  id: string;
  user_id: string;
  name: string;
  content: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Resume {
  id: string;
  user_id: string;
  name: string;
  file_url?: string;
  content?: string;
  version: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  user_id: string;
  name: string;
  issuer?: string;
  issue_date?: string;
  expiry_date?: string;
  credential_id?: string;
  credential_url?: string;
  created_at: string;
  updated_at: string;
}

export interface JobPreferences {
  id: string;
  user_id: string;
  preferred_locations?: string[];
  preferred_sectors?: string[];
  preferred_job_types?: string[];
  preferred_remote_type?: string;
  min_salary?: number;
  max_salary?: number;
  experience_level?: string;
  created_at: string;
  updated_at: string;
}

// Database enums
export type ApplicationStatus =
  | "interested"
  | "applied"
  | "interviewing"
  | "offered"
  | "rejected"
  | "withdrawn";
export type InterviewStatus =
  | "scheduled"
  | "completed"
  | "cancelled"
  | "rescheduled";
export type InterviewType = "phone" | "video" | "on-site" | "technical";
export type JobType = "full-time" | "part-time" | "contract" | "internship";
export type RemoteType = "remote" | "hybrid" | "on-site";
export type ExperienceLevel = "entry" | "mid" | "senior" | "executive";
export type ProficiencyLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert";

// API Response types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Job search filters
export interface JobSearchFilters {
  title?: string;
  location?: string;
  job_type?: JobType[];
  remote_type?: RemoteType[];
  experience_level?: ExperienceLevel[];
  salary_min?: number;
  salary_max?: number;
  sectors?: string[];
  skills?: string[];
  source?: string[];
}

// Cover letter generation request
export interface CoverLetterRequest {
  job_title: string;
  company: string;
  job_description: string;
  user_background: string;
  tone?: "professional" | "friendly" | "enthusiastic" | "formal";
  focus?: "experience" | "skills" | "achievements" | "culture-fit";
}

// Application with related data
export interface ApplicationWithJob extends Application {
  job_post: JobPost;
  interviews?: Interview[];
}

// Job post with application status
export interface JobPostWithStatus extends JobPost {
  application_status?: ApplicationStatus;
  application_id?: string;
}

export type SupabaseUser = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    iss: string;
    locale: string;
    name: string;
    phone_verified: boolean;
    picture: string;
    provider_id: string;
    sub: string;
  };
  identities: {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: {
      email: string;
      email_verified: boolean;
      family_name: string;
      given_name: string;
      iss: string;
      locale: string;
      name: string;
      phone_verified: boolean;
      picture: string;
      provider_id: string;
      sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
  }[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
