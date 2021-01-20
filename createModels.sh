npx sequelize-cli model:generate --name Dealership --attributes name:string,location:string,phoneNumber:string
npx sequelize-cli model:generate --name Cars --attributes name:string,doors:number,automatic:boolean,price:number,miles:number,dealershipId:string
npx sequelize-cli model:generate --name Employee --attributes firstName:string,lastName:string,age:number,phoneNumber:string,dealershipId:string
npx sequelize-cli model:generate --name Client --attributes firstName:string,lastName:string,phoneNumber:string,lookingForNewCar:boolean