import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const airdropsTable = sqliteTable("airdrops", {
  id: text("id").notNull().primaryKey(),
  imageUrl: text("imageUrl").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  instructions: text("description").notNull(),
})
