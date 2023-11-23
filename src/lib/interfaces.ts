export interface GemstoneReport {
  report_id: number;
  report_number: string;
  report_date: string; // or Date
  report_title: string;
  laboratory_name: string;
  award_number: number;
  qr_code: string;
  signature: string;
  barcode: string;
  report_verification_url: string;
}

export interface GemstoneDetail extends GemstoneReport {
  gemstone_id: number;
  description: string;
  identification: string;
  origin: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  cut: string;
  shape: string;
  color: string;
  additional_color: string;
  comments: string;
}
