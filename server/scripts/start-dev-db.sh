#!/bin/bash
set -e

docker-compose -f db/development_db.yml up -d
