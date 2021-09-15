import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  loadMessages,
  loadChannels,
  loadTriggers,
} from "../store/modules/messaging/actions";

const useMessages = () => {
  const { triggers, channels, messages } = useSelector(
    ({ messaging }) => messaging
  );
  const timers = useSelector(({ messaging }) =>
    messaging.messages.map((message) => ({ timer: message.timer }))
  );

  useEffect(() => {
    loadTriggers();
    loadChannels();
    loadMessages();
  }, []);

  return [triggers, channels, messages, timers];
};

export default useMessages;
