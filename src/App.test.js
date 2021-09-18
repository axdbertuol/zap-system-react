import { render, screen } from "@testing-library/react";
import { authenticateUser } from "./services/authApi";
import { fetchMessages } from "./services/msgApi";

describe("Auth routes ", () => {
  test("Should return success", async () => {
    const response = await authenticateUser("galo@test.com", "olag");
    expect(response.data.email).toEqual("galo@test.com");
    expect(response.status).toBe(200);
  });
  test("Should not allow", async () => {
    const response = await fetchMessages();
    expect(response.data.email).toEqual("galo@test.com");
    expect(response.status).toBe(200);
  });
});
