## Naming Convention

1. File
   - menggunakan separator dash (-) jika nama file lebih dari 1 kata
   - Nama file harus sama dengan nama class / interface yg dibuat
2. Class
   - PascalCase (PermissionSequelizeRepository)
3. Interface
   - Untuk interface yang juga berfungsi sebagai type gunakan prefix **I** (IPermission)
4. Type
   - Gunakan prefix T (TPermission)
5. Variable & Function
   - Gunakan camelCase (getAllPermission, permissionRawData)
   - Gunakan penamaan yg bersifat self-documented (nama menjelaskan fungsi dan tujuan variable & function)
6. constant
   - Gunakan kapital dan separator underscore (\_) jika nama constant lebih dari 1 kata (MATH_PI)

## Flow

1. Definisikan domain / entity data (di domain -> model)
2. Definisikan interface repository (di domain -> service)
3. Di infrastructure database, definisikan model sequelize berdasarkan domain / entity yg sudah di buat (di infrastructure -> database -> model)
4. Implementasikan domain service pada persistence repository
5. Service dapat memanggil multiple repository
6. Controller hanya memanggil 1 service
7. Gunakan dto jika membutuhkan custom output structure pada service

## Library requirements

1. Nodejs >= v18.x
2. Yarn >= 1.22.x
3. Pkg (install as global package) >= 5.8.x
4. Git >= 2.40.x

## Notes

1. On development use ".env.local" but on production with bundled apps (.exe) use ".env"
2. Create database first based on env config
3. Tables will auto migrate when running the apps
4. Seed menu by setup on const/seed-menu.ts and then run the seed by hitting endpoint GET "baseUrl/api/seeders/user-managements"
