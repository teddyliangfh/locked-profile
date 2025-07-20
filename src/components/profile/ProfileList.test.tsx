import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProfileList } from "./ProfileList";
import { TestProvider } from "@/test/TestProvider";

const mockCharacters = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://mock.com/rick.png",
    species: "Human",
    status: "Alive",
    gender: "Male",
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://mock.com/morty.png",
    species: "Human",
    status: "Alive",
    gender: "Male",
  },
];

describe("ProfileList", () => {
  it("renders character cards", () => {
    render(
      <TestProvider>
        <ProfileList
          characters={mockCharacters}
          loading={false}
          error={null}
          totalCount={2}
          page={1}
        />
      </TestProvider>
    );
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(
      <TestProvider>
        <ProfileList
          characters={[]}
          loading={true}
          error={null}
          totalCount={0}
          page={1}
        />
      </TestProvider>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("shows error state", () => {
    render(
      <TestProvider>
        <ProfileList
          characters={[]}
          loading={false}
          error={new Error("Failed to fetch")}
          totalCount={0}
          page={1}
        />
      </TestProvider>
    );
    expect(screen.getByText(/failed to load profiles/i)).toBeInTheDocument();
  });

  it("shows empty state", () => {
    render(
      <TestProvider>
        <ProfileList
          characters={[]}
          loading={false}
          error={null}
          totalCount={0}
          page={1}
        />
      </TestProvider>
    );
    expect(screen.getByText(/no item found/i)).toBeInTheDocument();
  });

  it("opens modal when card is clicked", () => {
    render(
      <TestProvider>
        <ProfileList
          characters={mockCharacters}
          loading={false}
          error={null}
          totalCount={2}
          page={1}
        />
      </TestProvider>
    );
    fireEvent.click(screen.getByText("Rick Sanchez"));
    // Modal title should appear
    expect(screen.getByRole("heading", { name: "Rick Sanchez" })).toBeInTheDocument();
    // Modal close button should be present
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });
}); 