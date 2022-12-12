#!/bin/bash

scp -i ~/id_rsa -r src/ resources/ plugins/ angular.json capacitor.config.json config.xml ionic.config.json karma.conf.js package.json tsconfig.app.json tsconfig.json tsconfig.spec.json  opc@129.159.60.164:/home/opc/QTdDias/
