import {
  boolean,
  decimal,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { clients } from './clients-schema';

export const statusEnum = pgEnum('status', ['open', 'working', 'closed']);

export const cases = pgTable('cases', {
  caseId: serial('case_id').primaryKey(),
  title: text('title'),
  description: text('description').notNull(),
  budget: decimal('budget'),
  status: statusEnum('status').notNull(),
  clientId: integer('client_id')
    .notNull()
    .references(() => clients.clientId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
