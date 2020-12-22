#!/bin/sh

currentBranch=$(git rev-parse --abbrev-ref HEAD)
protectedBranch=$(echo $currentBranch | grep -E '^(release|publish).*$')

if [ "$protectedBranch" != "" ]
then
        echo '\n'
        echo "---- Shop Boring Protection ----"
        echo "You can NOT commit on release or publish branches"
        echo "Please commit on PR or master branch."
        echo '\n'
        exit 1
fi
