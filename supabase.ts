import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type WaitlistEntry = {
  id: string;
  name: string;
  phone: string;
  location: string;
  role: 'farmer' | 'buyer';
  created_at: string;
};

export type DailyPrice = {
  id: string;
  product: string;
  unit: string;
  price_pula: number;
  location: string;
  updated_at: string;
};
