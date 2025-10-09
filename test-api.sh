#!/bin/bash

echo "=== Testing NeuraForge Research Job Creation ==="

echo "1. Testing environment variables..."
curl -s "https://neuraforge.tech/api/debug-env" | head -200

echo -e "\n\n2. Testing database connection..."
curl -s "https://neuraforge.tech/api/debug-db" | head -200

echo -e "\n\n3. Testing job creation..."
curl -X POST "https://neuraforge.tech/api/jobs" \
  -H "Content-Type: application/json" \
  -d '{"topic": "AI automation test"}' \
  -w "\nHTTP Status: %{http_code}\n"

echo -e "\n=== Test Complete ==="