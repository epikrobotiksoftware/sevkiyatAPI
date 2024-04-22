const rosnodejs = require('rosnodejs')

async function paramTest() {
  await rosnodejs.initNode(process.env.ROSNODE)
  const nh = rosnodejs.nh
}
