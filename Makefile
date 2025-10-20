UUID=hide-dash-overview@PendaGTP

.PHONY: all pack install clean

all: dist/extension.js

node_modules/.package-lock.json: package.json
	npm install

dist/extension.js: node_modules/.package-lock.json *.ts
	npm run build

$(UUID).zip: dist/extension.js
	@cp metadata.json dist/
	@(cd dist && zip ../$(UUID).zip -9r .)

pack: $(UUID).zip

install: $(UUID).zip
	gnome-extensions install --force $(UUID).zip

enable: all
	gnome-extensions enable $(UUID)

disable: all
	gnome-extensions enable $(UUID)

clean:
	@rm -rf dist node_modules $(NAME).zip

lint: node_modules/.package-lock.json
	npm run lint
