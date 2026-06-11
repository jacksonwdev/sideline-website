import { createClient } from "@supabase/supabase-js";

export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: number;
          name: string;
          email: string;
          user_type: string;
          favorite_sport: string | null;
          referral_code: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          user_type: string;
          favorite_sport?: string | null;
          referral_code?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["waitlist"]["Insert"]>;
        Relationships: [];
      };
      contact_submissions: {
        Row: {
          id: number;
          name: string;
          email: string;
          category: string;
          subject: string;
          message: string;
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          category: string;
          subject: string;
          message: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["contact_submissions"]["Insert"]
        >;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let client: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  client ??= createClient<Database>(supabaseUrl, supabaseAnonKey);
  return client;
}
