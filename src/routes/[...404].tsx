import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import { NotFoundPage } from "@modules/Errors/pages/NotFound";

export default function NotFound() {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <NotFoundPage />
    </>
  );
}
