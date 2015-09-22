SHELL := /bin/bash

KARMA_BIN := /usr/local/bin/node node_modules/karma/bin/karma
KARMA_CONFIG := /var/www/joppe/image-preloader/test/karma.conf.js

node:
	@echo "Install node packages"
	npm install

bower:
	@echo "Install bower packages"
	bower install

karma_test:
	@echo "Start karma test"
	@$(KARMA_BIN) start $(KARMA_CONFIG) --single-run --no-auto-watch --reporters dots
