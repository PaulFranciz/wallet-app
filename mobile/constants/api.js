// Prefer env when available (Expo supports EXPO_PUBLIC_* at build time)
export const API_URL = process.env.EXPO_PUBLIC_API_URL || "https://wallet-app-nuck.onrender.com/api";
// For local development, you can uncomment this line:
// export const API_URL = "http://localhost:5001/api";