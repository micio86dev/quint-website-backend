FROM alpine:3.21
ARG PB_VERSION=0.25.9
# Detect arch at build time (works on any builder; no reliance on BuildKit's TARGETARCH,
# which Railway's builder does not provide).
RUN apk add --no-cache ca-certificates unzip wget && \
  case "$(uname -m)" in \
    x86_64) PB_ARCH=amd64 ;; \
    aarch64) PB_ARCH=arm64 ;; \
    armv7l) PB_ARCH=armv7 ;; \
    *) PB_ARCH=amd64 ;; \
  esac && \
  wget -q "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${PB_ARCH}.zip" -O /tmp/pocketbase.zip && \
  unzip /tmp/pocketbase.zip -d /pb && rm /tmp/pocketbase.zip && chmod +x /pb/pocketbase
WORKDIR /pb
COPY pb_migrations ./pb_migrations
COPY pb_hooks ./pb_hooks
# NOTE: no Docker VOLUME instruction — persistence for /pb/pb_data is provided by a
# Railway Volume (dashboard) in production, and a named volume in docker-compose locally.
EXPOSE 8090
# Listen on Railway's injected $PORT (falls back to 8090 for local docker-compose).
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -q -O /dev/null "http://localhost:${PORT:-8090}/api/quint/health" || exit 1
CMD ["/bin/sh", "-c", "exec /pb/pocketbase serve --http=0.0.0.0:${PORT:-8090} --dir=/pb/pb_data --migrationsDir=/pb/pb_migrations"]
