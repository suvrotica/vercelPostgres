import { createPool } from "@vercel/postgres";
import { POSTGRES_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

async function createTablesIfNeeded(pool) {
  // Create tables if they don't exist
  await pool.sql`
    CREATE TABLE IF NOT EXISTS gemstone_details (
      gemstone_id SERIAL PRIMARY KEY,
      description VARCHAR(255),
      identification VARCHAR(255),
      origin VARCHAR(255),
      weight DECIMAL(10, 2),
      length DECIMAL(10, 2),
      width DECIMAL(10, 2),
      height DECIMAL(10, 2),
      cut VARCHAR(255),
      shape VARCHAR(255),
      color VARCHAR(255),
      additional_color VARCHAR(255),
      comments TEXT
    );
  `;

  await pool.sql`
    CREATE TABLE IF NOT EXISTS gemstone_reports (
      report_id INT PRIMARY KEY REFERENCES gemstone_details(gemstone_id),
      report_number VARCHAR(255),
      report_date DATE,
      report_title VARCHAR(255),
      laboratory_name VARCHAR(255),
      award_number INT,
      qr_code VARCHAR(255),
      signature TEXT,
      barcode VARCHAR(255),
      report_verification_url VARCHAR(255)
    );
  `;
}

async function addGemstone(gemstone) {
  const pool = createPool({
    connectionString: POSTGRES_URL,
  });

  await createTablesIfNeeded(pool);

  // Insert the gemstone details first
  const gemstoneResult = await pool.sql`
    INSERT INTO gemstone_details (
      description, identification, origin, weight, length, width, height, cut, 
      shape, color, additional_color, comments
    ) VALUES (
      ${gemstone.description}, ${gemstone.identification}, ${gemstone.origin}, 
      ${gemstone.weight}, ${gemstone.length}, ${gemstone.width}, ${gemstone.height}, 
      ${gemstone.cut}, ${gemstone.shape}, ${gemstone.color}, 
      ${gemstone.additional_color}, ${gemstone.comments}
    ) RETURNING gemstone_id;
  `;

  // Then insert the gemstone report
  await pool.sql`
    INSERT INTO gemstone_reports (
      report_id, report_number, report_date, report_title, laboratory_name, award_number, 
      qr_code, signature, barcode, report_verification_url
    ) VALUES (
      ${gemstoneResult.rows[0].gemstone_id}, ${gemstone.report_number}, ${gemstone.report_date}, ${gemstone.report_title}, 
      ${gemstone.laboratory_name}, ${gemstone.award_number}, ${gemstone.qr_code}, 
      ${gemstone.signature}, ${gemstone.barcode}, ${gemstone.report_verification_url}
    );
  `;

  return {
    gemstoneId: gemstoneResult.rows[0]?.gemstone_id,
  };
}

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();

    // Extract gemstone details from form data
    const gemstoneData = {
      description: form.get("description"),
      identification: form.get("identification"),
      origin: form.get("origin"),
      weight: parseFloat(form.get("weight")),
      length: parseFloat(form.get("length")),
      width: parseFloat(form.get("width")),
      height: parseFloat(form.get("height")),
      cut: form.get("cut"),
      shape: form.get("shape"),
      color: form.get("color"),
      additional_color: form.get("additional_color"),
      comments: form.get("comments"),
      report_number: form.get("report_number"),
      report_date: form.get("report_date"),
      report_title: form.get("report_title"),
      laboratory_name: form.get("laboratory_name"),
      award_number: parseInt(form.get("award_number")),
      qr_code: form.get("qr_code"),
      signature: form.get("signature"),
      barcode: form.get("barcode"),
      report_verification_url: form.get("report_verification_url"),
    };

    try {
      const { gemstoneId } = await addGemstone(gemstoneData);
      console.log("Gemstone added with ID:", gemstoneId);
      throw redirect(303, "/success");
    } catch (err) {
      console.error("Error adding gemstone:", err);
      return { error: err.message };
    }
  },
};
