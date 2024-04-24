import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "@/helpers/interfaces";

/**
 * Represents the state of the characters slice.
 */
export interface CharactersState {
  characters: Character[]; // Array of characters.
}

/**
 * Represents the initial state of the characters slice.
 */
const initialState: CharactersState = {
  characters: [],
};

/**
 * Represents the characters slice of the Redux store.
 */
export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    /**
     * Adds a character to the characters list if it doesn't already exist.
     * @param state - The current state.
     * @param action - The action containing the payload (character to be added).
     */
    addCharacter: (state, action: PayloadAction<Character>) => {
      const newCharacter = action.payload;

      // Check if the character already exists in the characters array
      const existingCharacter = state.characters.find((char) => char.name === newCharacter.name);

      if (!existingCharacter) {
        // If character doesn't exist, add it to the characters array
        state.characters.push(newCharacter);
      }
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      const characterNameToRemove = action.payload;
      state.characters = state.characters.filter((char) => char.name !== characterNameToRemove);
    },
  },
});

export const { addCharacter, removeCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
