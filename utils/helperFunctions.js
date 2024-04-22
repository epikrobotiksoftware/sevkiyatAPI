const os = require('os')

exports.getWirelessIP = () => {
  const interfaces = os.networkInterfaces()
  let wirelessIP = null

  Object.keys(interfaces).forEach((interfaceName) => {
    const interfaceInfo = interfaces[interfaceName]
    const wirelessInterface = interfaceInfo.find(
      (iface) =>
        iface.family === 'IPv4' &&
        !iface.internal &&
        iface.mac !== '00:00:00:00:00:00'
    )

    if (wirelessInterface) {
      wirelessIP = wirelessInterface.address
    }
  })

  return wirelessIP
}
