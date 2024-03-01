"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/*
*Clase para funcionalidad de rutas Login
*/
class AuthRoutes {
    //Inicializa
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Invocando Autenticacion');
        });
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
//# sourceMappingURL=authRoutes.js.map