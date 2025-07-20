import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProfileCard } from "./ProfileCard";
import type { Character } from "@/types/character";
import { TestProvider } from "@/test/TestProvider";

const mockCharacter: Character = {
  id: "1",
  name: "Rick Sanchez",
  image: "https://mock.com/rick.png",
  species: "Human",
  status: "Alive",
  gender: "Male",
};

describe("ProfileCard", () => {
  it("renders character info", () => {
    render(
      <TestProvider>
        <ProfileCard character={mockCharacter} />
      </TestProvider>
    );
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Species")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
  });

  it("renders status badge", () => {
    render(
      <TestProvider>
        <ProfileCard character={mockCharacter} />
      </TestProvider>
    );
    expect(screen.getByText("Alive")).toBeInTheDocument();
  });

  it("renders character image", () => {
    render(
      <TestProvider>
        <ProfileCard character={mockCharacter} />
      </TestProvider>
    );
    // NextImage renders an <img> with alt text
    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
  });

  it("calls onClick when card is clicked", () => {
    const handleClick = vi.fn();
    render(
      <TestProvider>
        <ProfileCard character={mockCharacter} onClick={handleClick} />
      </TestProvider>
    );
    fireEvent.click(screen.getByText("Rick Sanchez"));
    expect(handleClick).toHaveBeenCalled();
  });
}); 