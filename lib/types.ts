export type ToolCategory =
  | "All"
  | "Ideation & Titles"
  | "SEO & Optimization"
  | "Thumbnail & Design"
  | "Scripting & Content"
  | "Strategy & Planning"
  | "Community & Growth";

export interface ToolFieldOption {
  label: string;
  value: string;
}

export interface ToolInputField {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "number";
  placeholder?: string;
  defaultValue?: string;
  options?: ToolFieldOption[];
  required?: boolean;
  helpText?: string;
}

export interface ToolDefinition {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  isPro: boolean;
  badge?: string;
  iconName: string;
  fields: ToolInputField[];
  sampleOutput?: string;
  isClientOnly?: boolean; // For thumbnail downloader
}

export interface GenerationUsage {
  count: number;
  date: string; // YYYY-MM-DD
}

export interface WaitlistSubmission {
  email: string;
  plan: string;
  timestamp: string;
}
