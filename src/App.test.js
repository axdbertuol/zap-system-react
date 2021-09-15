import { render, screen } from "@testing-library/react";
import { authenticateUser } from "./services/authApi";

describe("Auth routes ", () => {
  test("Should return success", async () => {
    const response = await authenticateUser("galo@test.com", "olag");
    console.log(response);
    expect(response.data.email).toEqual("galo@test.com");
    expect(response.status).toBe(200);
  });
});
