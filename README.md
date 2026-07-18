# Quint PocketBase backend

PocketBase provides the local database, authenticated admin backoffice and a narrow public contact endpoint.

## Backoffice

1. Run `docker compose up --build` from the wrapper repository.
2. Open `http://localhost:8090/_/` and create the first superuser.
3. Open **Collections → contacts** to view leads. Contacts contain PII, so all native record APIs (list, view, create, update and delete) are locked to superusers. Regular authenticated records cannot access them.

The custom public endpoint is `POST /api/quint/contact`. It trims and bounds every field, validates the email and locale, rejects a honeypot field, limits request bodies to 4 KiB, and returns a generic error without reflecting request data. PocketBase applies a per-client guest limit of five submissions per 60 seconds; excess requests receive HTTP 429.

## Migrations

PocketBase applies unapplied migrations automatically when it starts and records their filenames in `pb_data`.

- **Fresh installs** run `1710000000_create_contacts.js`, followed by the PII-lock and contact-rate-limit migrations. The first migration intentionally has no index on PocketBase's unavailable `created` column.
- **Existing volumes with the initial migration already applied** keep their migration history. Do not edit or delete entries from `pb_data`; the forward `1710000001_lock_contacts_pii.js` migration keeps all contacts rules superuser-only, and `1710000002_rate_limit_contact.js` enables the contact submission limit on the next start.
- **Destructive local resets** are only for disposable development data: `docker compose down -v` removes the `pocketbase_data` volume, including leads, superusers and migration history. The next `docker compose up --build` creates a fresh database and reapplies every migration.

`1710000002_rate_limit_contact.js` explicitly blocks `migrate down` with an irreversible-operation error. Disabling a global limiter during a generic rollback could weaken other active rate-limit rules. To reverse it, a superuser must deliberately review and update PocketBase Settings; do not use `migrate down` as a substitute for that operational decision. Its up step removes any matching contact rule before adding one, preventing duplicate rules if it is reapplied after manual migration-history changes.

Commit generated migrations whenever the admin schema changes.
