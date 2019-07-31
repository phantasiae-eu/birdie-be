import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    port: 3306,
    database: 'birdietest',
    username: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
})

export default sequelize
