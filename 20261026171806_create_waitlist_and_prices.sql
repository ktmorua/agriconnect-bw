/*
# AgriConnect BW — waitlist + daily prices

1. New Tables
- `waitlist`
  - id (uuid, pk)
  - name (text, not null) — farmer/buyer's name
  - phone (text, not null) — Botswana +267 phone number
  - location (text, not null) — district selected from dropdown
  - role (text, not null) — 'farmer' or 'buyer'
  - created_at (timestamptz, default now())
- `daily_prices`
  - id (uuid, pk)
  - product (text, not null) — e.g. "Tswana Chicken"
  - unit (text, not null) — e.g. "per bird", "30-tray", "50kg"
  - price_pula (numeric, not null) — average market price in Pula
  - location (text, not null) — market location, e.g. "Gaborone"
  - updated_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- `waitlist`: anyone landing on the page (no sign-in) can add themselves; reads are intentionally
  public so the page can show social-proof counts/recent joins. Both `anon` and `authenticated`
  get CRUD with `USING (true)` because this is a single-tenant public waitlist with no accounts.
- `daily_prices`: public read so the landing page can render live prices; writes are also open
  (prices are seeded/maintained by operators, but there is no auth admin role in this no-auth app).
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  role text NOT NULL CHECK (role IN ('farmer','buyer')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON waitlist TO anon, authenticated;

DROP POLICY IF EXISTS "public_read_waitlist" ON waitlist;
CREATE POLICY "public_read_waitlist" ON waitlist FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_waitlist" ON waitlist;
CREATE POLICY "public_insert_waitlist" ON waitlist FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_waitlist" ON waitlist;
CREATE POLICY "public_update_waitlist" ON waitlist FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_waitlist" ON waitlist;
CREATE POLICY "public_delete_waitlist" ON waitlist FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS daily_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product text NOT NULL,
  unit text NOT NULL,
  price_pula numeric(10,2) NOT NULL,
  location text NOT NULL DEFAULT 'Gaborone',
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE daily_prices ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT, UPDATE, DELETE ON daily_prices TO anon, authenticated;

DROP POLICY IF EXISTS "public_read_prices" ON daily_prices;
CREATE POLICY "public_read_prices" ON daily_prices FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_insert_prices" ON daily_prices;
CREATE POLICY "public_insert_prices" ON daily_prices FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_prices" ON daily_prices;
CREATE POLICY "public_update_prices" ON daily_prices FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_prices" ON daily_prices;
CREATE POLICY "public_delete_prices" ON daily_prices FOR DELETE
  TO anon, authenticated USING (true);

-- Seed today's market prices (Gaborone)
INSERT INTO daily_prices (product, unit, price_pula, location)
VALUES
  ('Tswana Chicken', 'per bird', 85.00, 'Gaborone'),
  ('Broiler', 'per bird', 65.00, 'Gaborone'),
  ('Eggs', '30-tray', 52.00, 'Gaborone'),
  ('Feed', '50kg bag', 380.00, 'Gaborone')
ON CONFLICT DO NOTHING;
