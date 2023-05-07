"use strict";
exports.__esModule = true;
exports.SwaggerProvider = void 0;
var swagger_1 = require("@nestjs/swagger");
function SwaggerProvider(app) {
    var config = new swagger_1.DocumentBuilder()
        .setTitle('Quicker Interviewer API')
        .setDescription('Quicker Auto Interviewer API description')
        .setVersion('0.0.1')
        .addTag('result')
        .addTag('interview')
        .addTag('health')
        .build();
    var document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
}
exports.SwaggerProvider = SwaggerProvider;
