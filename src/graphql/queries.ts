// src/graphql/queries.ts
import { gql } from "@apollo/client";
//todo resuable fragments 
export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        status
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`;

export const GET_CHARACTER_DETAIL = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;
