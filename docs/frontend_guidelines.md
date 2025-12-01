# Frontend Development Guidelines (React + TypeScript + Vite)

## Tech Stack
- React 18+
- TypeScript
- Vite
- Fetch API (default)
- Component-based architecture

---

## Recommended Folder Structure

```
src/
├── components/
├── pages/
├── api/            # All backend calls
├── hooks/
├── types/
└── App.tsx
```

---

## API Calls

All API calls must go through files in `/api`.

Example (`/api/polls.ts`):

```ts
export async function getPoll(id: number) {
  const res = await fetch(`http://localhost:8080/api/polls/${id}`);
  return res.json();
}
```

---

## Component Rules

- Use **functional components**
- Use **TypeScript interfaces** for props
- Avoid random UI libraries unless approved
- Keep components small & reusable

---

## Example Component

```tsx
interface PollProps {
  id: number;
}

export function PollDetails({ id }: PollProps) {
  const [data, setData] = useState<PollResponse | null>(null);

  useEffect(() => {
    getPoll(id).then(setData);
  }, [id]);

  return <div>{data?.title}</div>;
}
```

---

## AI Usage Rules

AI assistants must:

1. Use React + TypeScript only.
2. Follow folder structure above.
3. Never generate backend/ML logic here.
4. Only call backend APIs via `/api/` modules.
5. Prefer diffs/patches instead of entire rewrites.

---
