const rosnodejs = require('rosnodejs')

var batteryStatus = null

rosnodejs.initNode('/batteryNode').then(() => {
  const nh = rosnodejs.nh
  const sub = nh.subscribe(
    'sensor_msgs/BatteryState',
    '/amr1_navigation__amr1__battery__battery/battery/out',
    async (msg) => {
      const percentage = msg.percentage * 100
      batteryStatus = percentage
    }
  )
})

exports.sendRobot = async (req, res) => {
  await rosnodejs.initNode(process.env.ROSNODE)
  const nh = rosnodejs.nh
  nh.setParam('/out_selection', req.body)
}
exports.getBattery = async (req, res) => {
  try {
    await rosnodejs.initNode(process.env.ROSNODE)
    const nh = rosnodejs.nh
    const sub = nh.subscribe(
      'sensor_msgs/BatteryState',
      '/amr1_navigation__amr1__battery__battery/battery/out',
      async (msg) => {
        const percentage = msg.percentage * 100
        battery = percentage
        res.status(200).json({
          success: true,
          data: percentage,
        })
      }
    )
  } catch (error) {
    console.log(error)
  }
}
