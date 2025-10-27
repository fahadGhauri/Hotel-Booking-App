import { createClient } from "@supabase/supabase-js";

const key_url =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdHFzYW9zanNqempyenNmbXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjU0NzAsImV4cCI6MjA3MzgwMTQ3MH0.k63ThZgntRKa1SuH4Ya6WwTCQB5fzy6oBHVt0j-JomU";

export const supabaseUrl = "https://pjtqsaosjsjzjrzsfmyg.supabase.co";
const supabaseKey = key_url;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
