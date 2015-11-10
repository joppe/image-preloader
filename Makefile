SHELL := /bin/bash

PWD := /var/www/projects/image-preloader
KARMA_BIN := node_modules/karma/bin/karma
KARMA_CONFIG := $(PWD)/test/karma.conf.js

npm:
	@echo "Install node packages"
	npm install

bower:
	@echo "Install bower packages"
	bower install

babel:
	@echo "Transpile javascript"
	$(PWD)/node_modules/babel/bin/babel.js src --stage 1 --out-dir dist --modules system

bundle:
	@echo "Bundle the javascript"
	@node ./bundle.js

setup: npm bower babel bundle

karma_test:
	@echo "Start karma test"
	@node $(KARMA_BIN) start $(KARMA_CONFIG) --single-run --no-auto-watch --reporters dots

clean:
	@echo "Cleanup installed files"
	@cd dist && ls | grep -v .gitkeep | xargs rm -rf
