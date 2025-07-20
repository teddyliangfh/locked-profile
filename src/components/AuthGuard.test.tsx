import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { AuthGuard } from "./AuthGuard";
import { TestProvider } from "@/test/TestProvider";
import "@testing-library/jest-dom";

// Clear localStorage before each test for useUserInfo
beforeEach(() => {
  localStorage.clear();
});

describe("AuthGuard", () => {
  it("should show BlockingDialog when user info is missing", async () => {
    render(
      <TestProvider>
        <AuthGuard>
          <div>Protected Content</div>
        </AuthGuard>
      </TestProvider>
    );
    // Wait for dialog to appear
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    expect(screen.getByText(/please enter your info/i)).toBeInTheDocument();
  });

  it("should validate: username and job title are required", async () => {
    render(
      <TestProvider>
        <AuthGuard>
          <div>Protected Content</div>
        </AuthGuard>
      </TestProvider>
    );
    // Wait for dialog to appear
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    // Click Save directly
    const saveBtn = await screen.findByRole("button", { name: /save/i });
    fireEvent.click(saveBtn);
    expect(await screen.findByRole("alert")).toHaveTextContent(/please enter both username and job title/i);
  });

  it("should save info, close dialog, and show protected content", async () => {
    render(
      <TestProvider>
        <AuthGuard>
          <div>Protected Content</div>
        </AuthGuard>
      </TestProvider>
    );
    // Wait for dialog to appear
    await waitFor(() => {
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
    // Fill in username and job title
    fireEvent.change(await screen.findByLabelText(/username/i), { target: { value: "Morty" } });
    fireEvent.change(await screen.findByLabelText(/job title/i), { target: { value: "Sidekick" } });
    // Click Save
    fireEvent.click(await screen.findByRole("button", { name: /save/i }));
    // Wait for dialog to disappear
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
    // Protected content should be visible
    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });
}); 