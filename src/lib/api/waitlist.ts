import { API_BASE_URL } from "../config";

/**
 * Join the waitlist
 * @param email - User's email address
 * @returns Promise with the response data
 * @throws Error if the request fails
 */
export async function joinWaitlist(email: string) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  // Sanitize email - trim and lowercase
  const sanitizedEmail = email.trim().toLowerCase();

  // Maximum email length check
  if (sanitizedEmail.length > 254) {
    throw new Error("Email address is too long");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: sanitizedEmail }),
      // Add timeout and security headers
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timeout. Please try again.");
      }
      throw error;
    }
    throw new Error("An unexpected error occurred");
  }
}
