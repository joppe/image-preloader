SHELL := /bin/bash

PWD := /var/www/projects/image-preloader
KARMA_BIN := /usr/local/bin/node node_modules/karma/bin/karma
KARMA_CONFIG := $(PWD)/test/karma.conf.js

npm:
	@echo "Install node packages"
	npm install

bower:
	@echo "Install bower packages"
	bower install

babel:
	@echo "Transpile javascript"
	$(PWD)/node_modules/babel/bin/babel.js demo/src --stage 1 --out-dir demo/js --modules system
	$(PWD)/node_modules/babel/bin/babel.js src --stage 1 --out-dir dist --modules system

setup: npm bower babel

karma_test:
	@echo "Start karma test"
	@$(KARMA_BIN) start $(KARMA_CONFIG) --single-run --no-auto-watch --reporters dots
