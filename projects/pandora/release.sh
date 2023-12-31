#!/bin/bash

# Check if an argument was provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 [version_type]"
    echo "version_type: patch, minor, or major"
    exit 1
fi

# The version type (patch, minor, major)
VERSION_TYPE=$1

# Bump the version and store the new version
NEW_VERSION=$(npm version "$VERSION_TYPE")

git add package.json

git commit -m "Bump version to $NEW_VERSION"

# Create a new git tag
git tag "$NEW_VERSION"

# Push the changes and tags to the remote repository
git push
git push origin "$NEW_VERSION"
