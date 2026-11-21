// Item routes

import { Router } from "express";
import { z } from "zod";

const router = Router();

const itemSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  value: z.number().positive(),
});

let items: Array<{ id: number; name: string; description?: string; value: number }> = [];
let nextId = 1;

router.get("/", (req, res) => { res.json(items); });

router.post("/", (req, res) => {
  const parsed = itemSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const item = { id: nextId++, ...parsed.data };
  items.push(item);
  res.status(201).json(item);
});

router.get("/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

router.delete("/:id", (req, res) => {
  const idx = items.findIndex(i => i.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  items.splice(idx, 1);
  res.status(204).send();
});

export { router as itemsRouter };