import { MikroORM } from "@mikro-orm/core"
import { User } from "./entity/User"
import { MsSqlDatabaseDriver } from 'mikro-orm-mssql'

MikroORM.init(
    {
        driver: MsSqlDatabaseDriver,
        entities: [User],
        dbName: 'test',
        host: 'localhost',
        user: 'admin',
        password: 'lomakin1'
    }
)