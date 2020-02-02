const SERVICE_UUID = '0000aadb-0000-1000-8000-00805f9b34fb';
const CHARACTERISTIC_UUID = '0000aadc-0000-1000-8000-00805f9b34fb';

export const isWebBluetoothSupported = 'bluetooth' in navigator;

export const connectToBluetoothDevice = () => {
  return navigator.bluetooth
    .requestDevice({
      acceptAllDevices: true,
      optionalServices: [SERVICE_UUID]
    })
    .then(device =>
      device.gatt.connect().then(server => {
        window.mdevice = device;
        window.mserver = server;
        return { device, server };
      })
    );
};

export const startNotifications = server =>
  server.getPrimaryService(SERVICE_UUID).then(service => {
    window.mservice = service;
    return service.getCharacteristic(CHARACTERISTIC_UUID).then(characteristic => {
      window.mcharacteristic = characteristic;
      characteristic.startNotifications();
      return characteristic;
    });
  });

export const disconnectFromBluetoothDevice = device => {
  if (!device || !device.gatt.connected) return Promise.resolve();
  return device.gatt.disconnect();
};
