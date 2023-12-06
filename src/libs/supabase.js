import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";

// require("dotenv").config()

const supabaseUrl = "https://uuawdwredhuqtobmadwc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1YXdkd3JlZGh1cXRvYm1hZHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MTc2NTMsImV4cCI6MjAxNjk5MzY1M30.frxoOumO6bnsizZkNGn969L27TMxzmkp9PWjltSLvYM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
