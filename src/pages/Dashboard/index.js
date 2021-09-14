import React from "react";
import {
  saveNewMessage,
  deleteMessageThunk,
  editMessageThunk,
  findMessagesThunk,
  saveNewTrigger,
  deleteTriggerThunk,
  editTriggerThunk,
  saveNewChannel,
  deleteChannelThunk,
  editChannelThunk,
} from "../../store/modules/messaging/actions";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>Messages</p>
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
          Adicionar
        </button>
        <button onClick={() => dispatch(deleteMessageThunk(1414214))}>
          Deletar
        </button>
        <button
          onClick={() =>
            dispatch(
              editMessageThunk({
                id: 1414214,
                channel: "whatsapp",
                trigger: "falou_com_atendimento",
                timer: "5:00",
                message: "Ae cacete",
              })
            )
          }
        >
          Editar
        </button>
      </div>
      <div>
        <p>Triggers</p>
        <button
          onClick={() =>
            dispatch(
              saveNewTrigger({
                id: 9991,
                name: "abertura_conta",
              })
            )
          }
        >
          Adicionar
        </button>
        <button onClick={() => dispatch(deleteTriggerThunk(9991))}>
          Deletar
        </button>
        <button
          onClick={() =>
            dispatch(
              editTriggerThunk({
                id: 9991,
                name: "fechar_conta",
              })
            )
          }
        >
          Editar
        </button>
      </div>
      <div>
        <p>CHannels</p>
        <button
          onClick={() =>
            dispatch(
              saveNewChannel({
                id: 666,
                name: "phone_cal",
              })
            )
          }
        >
          Adicionar
        </button>
        <button onClick={() => dispatch(deleteChannelThunk(666))}>
          Deletar
        </button>
        <button
          onClick={() =>
            dispatch(
              editChannelThunk({
                id: 666,
                name: "phone_call",
              })
            )
          }
        >
          Editar
        </button>
      </div>
      <button
        onClick={() => dispatch(findMessagesThunk("abertura_conta", "", ""))}
      >
        Editar
      </button>
    </div>
  );
};

export default Home;
