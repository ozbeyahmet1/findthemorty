import { Box, Chip } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios, { AxiosResponse } from "axios";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "@/helpers/interfaces";
import { addCharToPersist } from "@/store";
import { addCharacter, removeCharacter } from "@/store/slices/charactersSlice";
import ResultCard from "./resultCard";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7.5 + ITEM_PADDING_TOP,
      // background: "rgb(238, 188, 183)",
    },
  },
};

/**
 * Represents a multiple select component for choosing characters.
 */
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export default function MultipleSelect() {
  const charactersNames = useSelector(addCharToPersist).characters.map((character) => character.name);
  const [personName, setPersonName] = useState<string[]>(charactersNames);
  const dispatch = useDispatch();

  /**
   * Handles the change event of the select component.
   * @param event - The select change event.
   */
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const [characters, setCharacters] = useState<Character[]>([]);
  const [apiUrl, setApiUrl] = useState("https://rickandmortyapi.com/api/character?page=1");
  const [info, setInfo] = useState<info>({
    count: 0,
    pages: 0,
    next: "https://rickandmortyapi.com/api/character?page=2",
    prev: "",
  });

  interface info {
    count: number;
    pages: number;
    next: string;
    prev?: string;
  }

  useEffect(() => {
    /**
     * Fetches the characters from the API.
     */
    const fetchCharacters = async () => {
      try {
        const response: AxiosResponse<{ results: Character[]; info: info }> = await axios.get(apiUrl);
        const characterData: Character[] = response.data.results;
        setInfo(response.data.info);
        setCharacters((prevCharacters) => [...prevCharacters, ...characterData]);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };
    void fetchCharacters();
  }, [apiUrl]);

  /**
   * Loads more characters from the API.
   */
  function onLoadMore() {
    setApiUrl(info.next);
  }
  function handleMenuItemClick(character: Character) {
    if (charactersNames.includes(character.name)) {
      dispatch(removeCharacter(character.name));
    } else {
      dispatch(addCharacter(character));
    }
  }
  return (
    <div>
      <FormControl className={`w-full left-0 ${montserrat.className}`}>
        <InputLabel id="demo-multiple-name-label">Characters</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Characters" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => value !== undefined && <Chip key={value} label={value} />)}
            </Box>
          )}
          MenuProps={MenuProps}>
          {characters.map((character) => {
            return (
              <MenuItem
                key={character.id}
                value={character.name}
                onClick={() => handleMenuItemClick(character)}
                className="border-b-[1px] border-gray-200 border-solid bg-transparent left-0">
                <ResultCard data={character} />
              </MenuItem>
            );
          })}
          <MenuItem
            className={`p-0 bg-gray-400 active:bg-gray-400 text-white hover:bg-gray-600 transition-all duration-300 ${montserrat.className}`}
            onClick={onLoadMore}>
            <button className="w-full h-full  text-lg p-2 bg-gray-400">Load More</button>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
