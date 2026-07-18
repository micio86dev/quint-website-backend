FROM alpine:3.21
ARG PB_VERSION=0.25.9
ARG TARGETARCH
RUN apk add --no-cache ca-certificates unzip wget && \
  wget -q "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${TARGETARCH}.zip" -O /tmp/pocketbase.zip && \
  unzip /tmp/pocketbase.zip -d /pb && rm /tmp/pocketbase.zip && chmod +x /pb/pocketbase
WORKDIR /pb
COPY pb_migrations ./pb_migrations
COPY pb_hooks ./pb_hooks
VOLUME ["/pb/pb_data"]
EXPOSE 8090
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://localhost:8090/api/quint/health || exit 1
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb/pb_data", "--migrationsDir=/pb/pb_migrations"]
