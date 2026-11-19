export type AgentType = {
  id: number;
  name: string;
  telephone: string;
  email: string;
  activityType?: "Full Time" | "Part Time" | "Contract";
  status?: string;
  profile: string;
};
