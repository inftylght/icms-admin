#!/usr/bin/env bash
#!/usr/bin/env bash
git pull
npm install
ng build --prod
rm -rf /var/www/admin/html/*
cp -a -f dist/icms-frontend/. /var/www/admin/html/