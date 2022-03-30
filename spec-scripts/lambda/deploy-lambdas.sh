cd lambdas

for folder in *; do
  cd ${folder}
  FOLDER_NAME=${folder} ./deploy.sh
  cd ../
done