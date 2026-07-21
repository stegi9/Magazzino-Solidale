export const utentiTable = pgTable(
  "utenti",
  {
    // ... altri campi
    isSuperAdmin: boolean("is_super_admin").notNull().default(false),
    mustChangePassword: boolean("must_change_password").notNull().default(false),
    // ... altri campi
  },
  (table) => [
    uniqueIndex("utenti_matricola_unique").on(table.matricola),
    uniqueIndex("utenti_email_unique").on(table.email),
  ],
);
