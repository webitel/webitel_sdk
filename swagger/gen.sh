swagger mixin engine.api.swagger.json storage.api.swagger.json  > api.json
openapi-generator generate -g typescript-axios --additional-properties=modelPropertyNaming=original,withSeparateModelsAndApi=true --enable-post-process-file \
    -o ../src/api -i api.json

# openapi-generator generate -g typescript-axios --additional-properties=modelPropertyNaming=original,withSeparateModelsAndApi=true,enablePostProcessFile=true,apiPackage=api,modelPackage=api \
#    -o src -i /home/igor/opt/Programs/golib/src/github.com/webitel/protos/swagger/api.json
