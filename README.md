# jarkkotervonencom

My personal website.

## Development environment

```
gem install jekyll bundler
bundle install --path vendor/bundle
bundle exec jekyll serve
```
## Testing

```
bundle exec htmlproofer ./_site \
              --allow-hash-href \
              --check-favicon  \
              --check-html \
              --disable-external
```
