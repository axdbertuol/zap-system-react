import React from "react";
import {
  saveNewMessage,
  deleteMessageThunk,
} from "../../store/modules/messaging/actions";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            saveNewMessage({
              id: 1414214,
              channel: "whatsapp",
              trigger: "abertura_conta",
              timer: "5:00",
              message: "Ae",
            })
          )
        }
      >
        Comprar
      </button>
      <button onClick={() => dispatch(deleteMessageThunk(1414214))}>
        Deletar
      </button>
    </div>
  );
};

export default Home;
