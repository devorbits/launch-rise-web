import { API_BASE_URL } from "../config";

export async function joinWaitlist(email: string) {
  const res = await fetch(`${API_BASE_URL}/api/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}
