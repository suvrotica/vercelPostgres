import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";

export const config = {
  runtime: "nodejs18.x",
};

export async function load({}) {
  const pool = createPool({
    connectionString: POSTGRES_URL,
  });
  //attempt to get users from user table return nothing if table does not exist or error
  const { rows } = await pool.sql`
  SELECT gd.*, gr.report_number, gr.report_date, gr.report_title, gr.laboratory_name, 
  gr.award_number, gr.qr_code, gr.signature, gr.barcode, gr.report_verification_url
FROM gemstone_details gd
JOIN gemstone_reports gr ON gd.gemstone_id = gr.report_id;
`;
  console.log(rows);
  return { gemstones: rows };
}
