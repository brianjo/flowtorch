call git checkout master & rmdir /q /s website\build & cd website & call yarn install & call yarn build & cd .. & call git checkout website & echo website/ > .gitignore & call git clean -f -d & call git rm -r . & xcopy /E /I website\build ./ & call git add . & call git commit -a -m "Updating website" & call git push & call git checkout master & rmdir /q /s website\build