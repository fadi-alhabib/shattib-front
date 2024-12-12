export interface Consultation {
  consultationTopic: string;
  dateOfRequest: string; //"2024-11-09T00:13:18.142712"
  details: string;
  engineerSpecification: string;
  id: number;
  phoneNumber: string;
  projectCategory: string;
  status: "Pending" | "Completed";
  userId: string;
}
