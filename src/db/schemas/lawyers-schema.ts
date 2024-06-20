import { boolean, decimal, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users-schema';
import { float } from 'drizzle-orm/mysql-core';

export const lawyers = pgTable('lawyers', {
  lawyerId: serial('lawyer_id').primaryKey(),
  fullName: text('full_name').notNull(),
  profilePicture: text('profile_picture'),
  description: text('description'),
  location: text('location'),
  specialization: text('specialization'),
  education: text('education'),
  workExperience: text('work_experience'),
  rating: decimal('rating'),
  userId: integer('user_id')
    .notNull()
    .references(() => users.userId, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().$onUpdate(() => new Date()),
  isDeleted: boolean('is_deleted').notNull().default(false),
});
