swagger mixin engine.api.swagger.json storage.api.swagger.json  > api.json
openapi-generator generate -g typescript-axios --additional-properties=modelPropertyNaming=original --enable-post-process-file \
    -o ../src/api -i api.json
