import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tjmvidlimwvyrsifnrat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqbXZpZGxpbXd2eXJzaWZucmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MTM0NzQsImV4cCI6MjAzODM4OTQ3NH0.D1BRdGVDmrcE14rmW0lSIVgcwa-OeflvvDS-AtUB8vY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
