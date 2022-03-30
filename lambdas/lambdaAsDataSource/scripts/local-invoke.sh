[ -z "$EVENT" ] && EVENT="sqs-put" # Check if the $EVENT is empty and if it is, then set a value
[ -z "$FUNCTION_LOGICAL_ID" ] && FUNCTION_LOGICAL_ID=DeleteResized

./scripts/build-container.sh
sam local invoke \
  -e events/${EVENT}.json \
  --log-file "logs/${EVENT}-$(date "+%FT%T GMT%Z").log" \
  ${FUNCTION_LOGICAL_ID}
