import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMessages,
  loadChannels,
  loadTriggers,
} from "../store/modules/messaging/actions";

const useMessages = () => {
  const dispatch = useDispatch();
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
    if (!triggers || triggers.length === 0) {
      dispatch(loadTriggers());
    }
    if (!channels || channels.length === 0) {
      dispatch(loadChannels());
    }
    if (!messages || messages.length === 0) {
      dispatch(loadMessages());
    }
  }, [dispatch, channels, messages, triggers]);

  // useEffect(() => {
  //   console.log(triggers);
  //   console.log(channels);
  //   console.log(messages);
  // }, [triggers, channels, messages]);

  return [triggers, channels, messages, timers];
};

export default useMessages;
