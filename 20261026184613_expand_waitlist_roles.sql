/*
# AgriConnect BW — expand waitlist roles

1. Changes
- `waitlist.role` check constraint now accepts 'farmer', 'buyer', 'investor', 'consultant'
  (previously only 'farmer' and 'buyer').
- Renamed constraint for clarity (drop old, add new).
- No data loss: existing rows keep their current role values, all still valid.

2. Notes
- `daily_prices` table is no longer used by the rebuilt landing page (prices are now
  manual/seller-set, not a live market feed). It is left in place and untouched —
  no destructive changes.
*/

ALTER TABLE waitlist DROP CONSTRAINT IF EXISTS waitlist_role_check;

ALTER TABLE waitlist
  ADD CONSTRAINT waitlist_role_check
  CHECK (role IN ('farmer','buyer','investor','consultant'));
