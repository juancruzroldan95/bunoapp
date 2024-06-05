CREATE TABLE IF NOT EXISTS "cases" (
	"case_id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"description" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"is_deleted" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cases" ADD CONSTRAINT "cases_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
