import { APIEvent, json } from 'solid-start/api';

export async function GET(_event: APIEvent) {
  return json({ message: 'Hello' });
}
