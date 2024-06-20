import {
  pgEnum,
  boolean,
  decimal,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { lawyers } from './lawyers-schema';

export const statusEnum = pgEnum('status', ['sent', 'hired']);

export const proposals = pgTable('proposals', {
  proposalId: serial('proposal_id').primaryKey(),
  title: text('title'),
  description: text('description').notNull(),
  amount: decimal('amount').notNull(),
  status: statusEnum('status').notNull(),
  lawyerId: integer('lawyer_id')
    .notNull()
    .references(() => lawyers.lawyerId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
