import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ProfileCardModal } from "./ProfileCardModal";
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

describe("ProfileCardModal", () => {
  it("renders modal with character info when open", () => {
    render(
      <TestProvider>
        <ProfileCardModal
          character={mockCharacter}
          isOpen={true}
          onClose={vi.fn()}
        />
      </TestProvider>
    );
    // Modal title
    expect(
      screen.getByRole("heading", { name: /rick sanchez/i })
    ).toBeInTheDocument();
    // Character image
    expect(screen.getByAltText("Rick Sanchez")).toBeInTheDocument();
    // Species, Gender, Status
    expect(screen.getByText(/species/i)).toBeInTheDocument();
    expect(screen.getByText(/human/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/alive/i)).toBeInTheDocument();
  });

  it("does not render modal when isOpen is false", () => {
    render(
      <TestProvider>
        <ProfileCardModal
          character={mockCharacter}
          isOpen={false}
          onClose={vi.fn()}
        />
      </TestProvider>
    );
    // Modal title should not be in the document
    expect(
      screen.queryByRole("heading", { name: /rick sanchez/i })
    ).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    render(
      <TestProvider>
        <ProfileCardModal
          character={mockCharacter}
          isOpen={true}
          onClose={handleClose}
        />
      </TestProvider>
    );
    const closeBtn = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });
  });
});
