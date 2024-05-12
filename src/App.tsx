import { useEffect, useState } from "react";

import MultiSelectAutoCompleteInput from "./components/MultiSelectAutocompleteInput/index.tsx";
import CharacterItem from "./components/CharacterItem/index.tsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "./store/store.ts";
const App: React.FunctionComponent = () => {
  const [filterParam, setFilterParam] = useState("");
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  );
  const isLoading = useSelector(
    (state: RootState) => state.characters.isLoading
  );

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.characters.getCharactersAsync(filterParam);
  }, [filterParam, dispatch]);

  return (
    <div className="app_container">
      <MultiSelectAutoCompleteInput
        isLoading={isLoading}
        onChangeInput={setFilterParam}
        options={characters?.map((c) => {
          return {
            label: c.name,
            value: c.id,
            // if you want to render your own component as an option, use renderedItem
            renderedItem: (
              <CharacterItem
                id={c.id}
                name={c.name.replace(
                  new RegExp(filterParam, "gi"),
                  (match) => `<b>${match}</b>`
                )}
                episode={c.episode.length}
                image={c.image}
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default App;
