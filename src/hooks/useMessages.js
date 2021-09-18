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
  const timers = useSelector(({ messaging }) => {
    const timersArr = messaging.messages.map((message) => message.timer);
    // filter uniques
    return timersArr
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      .map((t) => ({ timer: t }));
  });

  useEffect(() => {
    loadTriggers();
    loadChannels();
    loadMessages();
  }, []);

  return [triggers, channels, messages, timers];
};

export default useMessages;
