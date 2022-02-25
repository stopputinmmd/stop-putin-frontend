import { useEffect, useState } from "react";
import { BorderedBox } from "./styles";

export const DisplayName = ({ name, url }: { name: string, url: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setLoaded(false)
      }, 0)
    }
  }, [loaded])

  return (
    <BorderedBox>
      <div style={{ fontWeight: 600 }}> {name}</div>
      {!loaded && <iframe src={url} onLoad={() => setTimeout(() => setLoaded(true), 4000)}></iframe>}
    </BorderedBox>
  );
};
