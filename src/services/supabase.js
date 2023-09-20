import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fsuxlwfoceualndkstda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdXhsd2ZvY2V1YWxuZGtzdGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMDY3NjIsImV4cCI6MjAxMDc4Mjc2Mn0.YB6YqDm0ny3dmYMvpUJSLjE4kAIUWMv8VC6KZTd8q6c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
